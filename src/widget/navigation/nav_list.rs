use super::{nav_bar::nav_bar_pages_style, NavItem};
use crate::{
    scrollable,
    widget::{expander, list_row},
};
use derive_setters::Setters;
use iced::{
    widget::{container, vertical_space, Column},
    Element, Length, Renderer,
};
use iced_lazy::Component;

#[derive(Setters)]
pub struct NavList<'a, Message> {
    children: Vec<NavItem>,
    display: bool,
    #[setters(strip_option)]
    on_item_selected: Option<Box<dyn Fn(usize) -> Message + 'a>>,
    #[setters(strip_option)]
    on_item_child_selected: Option<Box<dyn Fn(usize, usize) -> Message + 'a>>,
}

impl<'a, Message> NavList<'a, Message> {
    pub fn new() -> Self {
        Self {
            children: vec![],
            display: true,
            on_item_selected: None,
            on_item_child_selected: None,
        }
    }
}

pub fn nav_list<'a, Message>() -> NavList<'a, Message> {
    NavList::new()
}

#[derive(Clone)]
pub enum NavListEvent {
    ItemSelected(usize),
    ItemChildSelected(usize),
}

#[derive(Default)]
pub struct NavListState {
    selected_item: usize,
    selected_chid: (usize, usize),
}

impl<'a, Message> Component<Message, Renderer> for NavList<'a, Message> {
    type State = NavListState;

    type Event = NavListEvent;

    fn update(&mut self, state: &mut Self::State, event: Self::Event) -> Option<Message> {
        match event {
            NavListEvent::ItemSelected(index) => {
                state.selected_item = index;
                self.on_item_selected
                    .as_ref()
                    .map(|on_item_selected| on_item_selected(index))
            }
            NavListEvent::ItemChildSelected(selected_child) => {
                state.selected_chid = (state.selected_item, selected_child);
                self.on_item_child_selected
                    .as_ref()
                    .map(|on_item_child_selected| {
                        on_item_child_selected(state.selected_item, selected_child)
                    })
            }
        }
    }

    fn view(&self, state: &Self::State) -> Element<Self::Event> {
        if self.display {
            let items = self
                .children
                .iter()
                .enumerate()
                .map(|(index, item)| {
                    if item.children.is_some() {
                        expander()
                            .title(&item.title)
                            .icon(item.icon.clone())
                            .on_press(NavListEvent::ItemSelected(index))
                            .on_row_selected(Box::new(NavListEvent::ItemChildSelected))
                            .rows(
                                item.children
                                    .as_ref()
                                    .unwrap()
                                    .iter()
                                    .enumerate()
                                    .map(|(child_index, child)| {
                                        list_row()
                                            .title(&child.title)
                                            .icon(child.icon.clone())
                                            .active(child_index == state.selected_chid.1)
                                            .into()
                                    })
                                    .collect(),
                            )
                            .into()
                    } else {
                        expander()
                            .title(&item.title)
                            .icon(item.icon.clone())
                            .expansible(false)
                            .on_press(NavListEvent::ItemSelected(index))
                            .into()
                    }
                })
                .collect();

            container(scrollable!(Column::with_children(items)
                .spacing(10)
                .padding(10)
                .max_width(300)))
            .height(Length::Fill)
            .style(iced::theme::Container::Custom(nav_bar_pages_style))
            .into()
        } else {
            vertical_space(Length::Fill).into()
        }
    }
}

impl<'a, Message: 'a> From<NavList<'a, Message>> for Element<'a, Message, Renderer> {
    fn from(nav_bar: NavList<'a, Message>) -> Self {
        iced_lazy::component(nav_bar)
    }
}
