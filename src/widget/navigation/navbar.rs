use crate::scrollable;
use crate::widget::nav_bar::nav_bar_sections_style;
use crate::widget::Background;
use derive_setters::Setters;
use iced::Length;
use iced::Renderer;
use iced_lazy::Component;
use iced_native::widget::{column, container};
use iced_native::{row, Alignment, Element};
use iced_style::button::Appearance;
use iced_style::{theme, Theme};
use std::collections::BTreeMap;

use super::NavItem;

#[derive(Setters, Default)]
pub struct NavBar<'a, Message> {
    source: BTreeMap<NavItem, Vec<NavItem>>,
    active: bool,
    condensed: bool,
    #[setters(strip_option)]
    on_page_selected: Option<Box<dyn Fn(usize, usize) -> Message + 'a>>,
}

impl<'a, Message> NavBar<'a, Message> {
    pub fn new() -> Self {
        Self {
            source: Default::default(),
            active: false,
            condensed: false,
            on_page_selected: None,
        }
    }
}

pub fn nav_bar<'a, Message>() -> NavBar<'a, Message> {
    NavBar::new()
}

#[derive(Clone)]
pub enum NavBarEvent {
    SectionSelected(usize),
    PageSelected(usize, usize),
    RevealSections,
}

#[derive(Default)]
pub struct NavBarState {
    selected_section: usize,
    selected_page: Option<usize>,
}

impl<'a, Message> Component<Message, Renderer> for NavBar<'a, Message> {
    type State = NavBarState;
    type Event = NavBarEvent;

    fn update(&mut self, state: &mut Self::State, event: Self::Event) -> Option<Message> {
        match event {
            NavBarEvent::SectionSelected(section) => {
                state.selected_section = section;
                state.selected_page = None;
                None
            }
            NavBarEvent::PageSelected(section, page) => {
                state.selected_page = Some(page);
                self.on_page_selected
                    .as_ref()
                    .map(|on_page_selected| (on_page_selected)(section, page))
            }
            NavBarEvent::RevealSections => {
                state.selected_page = None;
                None
            }
        }
    }

    fn view(&self, state: &Self::State) -> Element<Self::Event, Renderer> {
        if self.active {
            let mut sections: Vec<Element<Self::Event, Renderer>> = vec![];
            let mut pages: Vec<Element<Self::Event, Renderer>> = vec![];

            for (section_index, (section, section_pages)) in self.source.iter().enumerate() {
                sections.push(
                    crate::nav_button!(
                        &section.title,
                        &section.icon,
                        true,
                        section_index == state.selected_section
                    )
                    .on_press(NavBarEvent::SectionSelected(section_index))
                    .into(),
                );
                if section_index == state.selected_section {
                    for (page_index, page) in section_pages.iter().enumerate() {
                        let active = state.selected_page.is_some()
                            && page_index == state.selected_page.unwrap();
                        pages.push(
                            crate::nav_button!(&page.title, &page.icon, self.condensed, active)
                                .on_press(NavBarEvent::PageSelected(section_index, page_index))
                                .into(),
                        );
                    }
                }
            }
            let width: u16 = if self.condensed { 100 } else { 200 };
            let nav_bar: Element<Self::Event, Renderer> = container(row![
                scrollable!(column(sections)
                    .spacing(10)
                    .padding(10)
                    .max_width(100)
                    .align_items(Alignment::Center)
                    .height(Length::Shrink)),
                container(scrollable!(column(pages)
                    .spacing(10)
                    .padding(10)
                    .max_width(width.into())
                    .align_items(Alignment::Center)
                    .width(Length::Units(width))
                    .height(Length::Shrink)))
                .height(Length::Fill)
                .style(theme::Container::Custom(nav_bar_sections_style)),
            ])
            .height(Length::Fill)
            .style(theme::Container::Custom(nav_bar_sections_style))
            .into();
            nav_bar
        } else {
            row![].into()
        }
    }
}

impl<'a, Message: 'a> From<NavBar<'a, Message>> for Element<'a, Message, Renderer> {
    fn from(nav_bar: NavBar<'a, Message>) -> Self {
        iced_lazy::component(nav_bar)
    }
}

pub fn section_button_style(theme: &Theme) -> Appearance {
    let primary = &theme.cosmic().primary;
    Appearance {
        shadow_offset: Default::default(),
        background: Some(Background::Color(primary.base.into())),
        border_radius: 5.0,
        border_width: 0.0,
        border_color: Default::default(),
        text_color: Default::default(),
    }
}
