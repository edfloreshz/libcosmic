// From iced_aw, license MIT

//! A tree structure for constructing a hierarchical menu

use std::borrow::Cow;
use std::collections::HashMap;

use iced_widget::core::{renderer, Element};
use iced_widget::horizontal_rule;

use crate::iced_core::{Alignment, Length};
use crate::widget::menu::action::MenuAction;
use crate::widget::menu::key_bind::KeyBind;
use crate::{theme, widget};

/// Nested menu is essentially a tree of items, a menu is a collection of items
/// a menu itself can also be an item of another menu.
///
/// A `MenuTree` represents a node in the tree, it holds a widget as a menu item
/// for its parent, and a list of menu tree as child nodes.
/// Conceptually a node is either a menu(inner node) or an item(leaf node),
/// but there's no need to explicitly distinguish them here, if a menu tree
/// has children, it's a menu, otherwise it's an item
#[allow(missing_debug_implementations)]
pub struct MenuTree<'a, Message, Renderer = crate::Renderer> {
    /// The menu tree will be flatten into a vector to build a linear widget tree,
    /// the `index` field is the index of the item in that vector
    pub(super) index: usize,

    /// The item of the menu tree
    pub(super) item: Element<'a, Message, crate::Theme, Renderer>,
    /// The children of the menu tree
    pub(super) children: Vec<MenuTree<'a, Message, Renderer>>,
    /// The width of the menu tree
    pub(super) width: Option<u16>,
    /// The height of the menu tree
    pub(super) height: Option<u16>,
}

impl<'a, Message, Renderer> MenuTree<'a, Message, Renderer>
where
    Renderer: renderer::Renderer,
{
    /// Create a new menu tree from a widget
    pub fn new(item: impl Into<Element<'a, Message, crate::Theme, Renderer>>) -> Self {
        Self {
            index: 0,
            item: item.into(),
            children: Vec::new(),
            width: None,
            height: None,
        }
    }

    /// Create a menu tree from a widget and a vector of sub trees
    pub fn with_children(
        item: impl Into<Element<'a, Message, crate::Theme, Renderer>>,
        children: Vec<impl Into<MenuTree<'a, Message, Renderer>>>,
    ) -> Self {
        Self {
            index: 0,
            item: item.into(),
            children: children.into_iter().map(Into::into).collect(),
            width: None,
            height: None,
        }
    }

    /// Sets the width of the menu tree.
    /// See [`ItemWidth`]
    ///
    /// [`ItemWidth`]:`super::ItemWidth`
    #[must_use]
    pub fn width(mut self, width: u16) -> Self {
        self.width = Some(width);
        self
    }

    /// Sets the height of the menu tree.
    /// See [`ItemHeight`]
    ///
    /// [`ItemHeight`]: `super::ItemHeight`
    #[must_use]
    pub fn height(mut self, height: u16) -> Self {
        self.height = Some(height);
        self
    }

    /* Keep `set_index()` and `flattern()` recurse in the same order */

    /// Set the index of each item
    pub(super) fn set_index(&mut self) {
        /// inner counting function.
        fn rec<Message, Renderer>(mt: &mut MenuTree<'_, Message, Renderer>, count: &mut usize) {
            // keep items under the same menu line up
            mt.children.iter_mut().for_each(|c| {
                c.index = *count;
                *count += 1;
            });

            mt.children.iter_mut().for_each(|c| rec(c, count));
        }

        let mut count = 0;
        self.index = count;
        count += 1;
        rec(self, &mut count);
    }

    /// Flatten the menu tree
    pub(super) fn flattern(&'a self) -> Vec<&Self> {
        /// Inner flattening function
        fn rec<'a, Message, Renderer>(
            mt: &'a MenuTree<'a, Message, Renderer>,
            flat: &mut Vec<&MenuTree<'a, Message, Renderer>>,
        ) {
            mt.children.iter().for_each(|c| {
                flat.push(c);
            });

            mt.children.iter().for_each(|c| {
                rec(c, flat);
            });
        }

        let mut flat = Vec::new();
        flat.push(self);
        rec(self, &mut flat);

        flat
    }
}

impl<'a, Message, Renderer> From<Element<'a, Message, crate::Theme, Renderer>>
    for MenuTree<'a, Message, Renderer>
where
    Renderer: renderer::Renderer,
{
    fn from(value: Element<'a, Message, crate::Theme, Renderer>) -> Self {
        Self::new(value)
    }
}

/// This macro creates a button for a MenuTree.
#[macro_export]
macro_rules! menu_button {
    ($($x:expr),+ $(,)?) => (
        widget::button(
            widget::Row::with_children(vec![$($x.into()),+])
            .align_items(Alignment::Center)
            .height(Length::Fill)
            .width(Length::Fill),
        )
        .height(Length::Fixed(36.0))
        .padding([4, 16])
        .width(Length::Fill)
        .style(theme::Button::MenuItem)
    );
}

/// Represents a menu item that performs an action when selected or a separator between menu items.
///
/// - `Action` - Represents a menu item that performs an action when selected.
///     - `L` - The label of the menu item.
///     - `A` - The action to perform when the menu item is selected, the action must implement the `MenuAction` trait.
/// - `CheckBox` - Represents a checkbox menu item.
///     - `L` - The label of the menu item.
///     - `bool` - The state of the checkbox.
///     - `A` - The action to perform when the menu item is selected, the action must implement the `MenuAction` trait.
/// - `Folder` - Represents a folder menu item.
///     - `L` - The label of the menu item.
///     - `Vec<MenuItem<A, L>>` - A vector of menu items.
/// - `Divider` - Represents a divider between menu items.
pub enum MenuItem<A: MenuAction, L: Into<Cow<'static, str>>> {
    /// Represents a button menu item.
    Button(L, A),
    /// Represents a checkbox menu item.
    CheckBox(L, bool, A),
    /// Represents a folder menu item.
    Folder(L, Vec<MenuItem<A, L>>),
    /// Represents a divider between menu items.
    Divider,
}

/// Create a root menu item.
///
/// # Arguments
/// - `label` - The label of the menu item.
///
/// # Returns
/// - A button for the root menu item.
pub fn menu_root<'a, Message, Renderer: renderer::Renderer>(
    label: impl Into<Cow<'a, str>> + 'a,
) -> iced::Element<'a, Message, crate::Theme, Renderer>
where
    Element<'a, Message, crate::Theme, Renderer>:
        From<widget::button::Button<'a, Message, crate::Theme, iced::Renderer>>,
{
    widget::button(widget::text(label))
        .padding([4, 12])
        .style(theme::Button::MenuRoot)
        .into()
}

/// Create a list of menu items from a vector of `MenuItem`.
///
/// The `MenuItem` can be either an action or a separator.
///
/// # Arguments
/// - `key_binds` - A reference to a `HashMap` that maps `KeyBind` to `A`.
/// - `children` - A vector of `MenuItem`.
///
/// # Returns
/// - A vector of `MenuTree`.
pub fn menu_items<
    'a,
    A: MenuAction<Message = Message>,
    L: Into<Cow<'static, str>> + 'static,
    Message: 'a,
    Renderer: renderer::Renderer + 'a,
>(
    key_binds: &HashMap<KeyBind, A>,
    children: Vec<MenuItem<A, L>>,
) -> Vec<MenuTree<'a, Message, Renderer>>
where
    Element<'a, Message, crate::Theme, Renderer>:
        From<widget::button::Button<'a, Message, crate::Theme, iced::Renderer>>,
{
    fn find_key<A: MenuAction>(action: &A, key_binds: &HashMap<KeyBind, A>) -> String {
        for (key_bind, key_action) in key_binds.iter() {
            if action == key_action {
                return key_bind.to_string();
            }
        }
        String::new()
    }

    let size = children.len();

    children
        .into_iter()
        .enumerate()
        .flat_map(|(i, item)| {
            let mut trees = vec![];
            match item {
                MenuItem::Button(label, action) => {
                    let key = find_key(&action, key_binds);
                    let menu_button = menu_button!(
                        widget::text(label),
                        widget::horizontal_space(Length::Fill),
                        widget::text(key),
                    )
                    .on_press(action.message(None));

                    trees.push(MenuTree::<Message, Renderer>::new(menu_button));
                }
                MenuItem::CheckBox(label, value, action) => {
                    let key = find_key(&action, &key_binds);
                    trees.push(MenuTree::new(
                        menu_button!(
                            if value {
                                // TODO: add a object-select-symbolic icon, `Message: 'static` is required when using an icon widget.
                                widget::container(widget::text("✓"))
                            } else {
                                widget::container(widget::Space::with_width(Length::Fixed(16.0)))
                            },
                            widget::Space::with_width(Length::Fixed(8.0)),
                            widget::text(label),
                            widget::horizontal_space(Length::Fill),
                            widget::text(key)
                        )
                        .on_press(action.message(None)),
                    ));
                }
                MenuItem::Folder(label, children) => {
                    trees.push(MenuTree::<Message, Renderer>::with_children(
                        menu_button!(
                            widget::text(label),
                            widget::horizontal_space(Length::Fill),
                            // TODO: add a pan-end-symbolic icon, `Message: 'static` is required when using an icon widget.
                            widget::text("▶"),
                        ),
                        menu_items(key_binds, children),
                    ));
                }
                MenuItem::Divider => {
                    if i != size - 1 {
                        trees.push(MenuTree::<Message, Renderer>::new(horizontal_rule(1)));
                    }
                }
            }
            trees
        })
        .collect()
}