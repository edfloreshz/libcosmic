use std::vec;

use apply::Apply;
use iced::{
    Element,
    Length,
    widget::{
        row, 
        horizontal_space, button, container
    }, alignment::{Vertical, Horizontal} 
};
use iced_native::widget::column;

#[derive(Default)]
pub struct Expander
{
    pub expanded: bool
}

#[derive(Clone, Copy, Debug)]
pub enum ExpanderMsg {
    Expand,
}

impl Expander {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn render<T>(&self) -> Element<'_, T> 
        where T: Clone + From<ExpanderMsg> + 'static
    {
        let title = iced::widget::text("Title")
            .vertical_alignment(Vertical::Center)
            .horizontal_alignment(Horizontal::Center)
            .into();
        let subtitle = iced::widget::text("Subtitle")
            .vertical_alignment(Vertical::Center)
            .horizontal_alignment(Horizontal::Center)
            .into();
        let text = column(
            vec![title, subtitle]
        ).into();
        let space = horizontal_space(Length::Fill).into();
        let icon = super::icon(
            if self.expanded {
                "go-down-symbolic"
            } else {
                "go-next-symbolic"
            },
            24
        )
        .apply(button)
        .on_press(T::from(ExpanderMsg::Expand))
        .width(Length::Units(35))
        .into();
        
        container(row(vec![text, space, icon])).into()
    }
}