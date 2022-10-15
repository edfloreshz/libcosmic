use derive_setters::Setters;
use iced::{
    alignment::{Horizontal, Vertical},
    theme,
    widget::{button, container, row, text, text_input},
    Alignment, Background, Element, Length, Renderer, Theme,
};
use iced_lazy::Component;

#[derive(Setters)]
pub struct SpinButton<'a, Message> {
    #[setters(strip_option)]
    value: Option<i32>,
    #[setters(strip_option)]
    on_value_change: Option<Box<dyn Fn(i32) -> Message + 'a>>,
}

pub fn spin_button<'a, Message>() -> SpinButton<'a, Message> {
    SpinButton {
        value: None,
        on_value_change: None,
    }
}

#[derive(Clone)]
pub enum SpinButtonEvent {
    IncrementPressed,
    DecrementPressed,
    ValueChanged(String),
    EditValue,
}

#[derive(Default)]
pub struct SpinButtonState {
    value: i32,
    value_assigned: bool,
    show_text_input: bool,
}

impl<'a, Message> Component<Message, Renderer> for SpinButton<'a, Message> {
    type State = SpinButtonState;

    type Event = SpinButtonEvent;

    fn update(&mut self, state: &mut Self::State, event: Self::Event) -> Option<Message> {
        if !state.value_assigned {
            state.value = self.value.unwrap();
            state.value_assigned = true;
        }
        match event {
            SpinButtonEvent::IncrementPressed => {
                state.value += 1;
                state.show_text_input = false
            }
            SpinButtonEvent::DecrementPressed => {
                state.value -= 1;
                state.show_text_input = false
            }
            SpinButtonEvent::ValueChanged(new_value) => {
                state.value = new_value.parse::<i32>().unwrap();
            }
            SpinButtonEvent::EditValue => state.show_text_input = true,
        }
        self.on_value_change
            .as_ref()
            .map(|on_value_change| (on_value_change)(state.value))
    }

    fn view(&self, state: &Self::State) -> Element<Self::Event> {
        let value = if !state.value_assigned {
            self.value.unwrap()
        } else {
            state.value
        };
        let value_container: Element<Self::Event> = if !state.show_text_input {
            button(
                    container(text(value).vertical_alignment(Vertical::Center))
                    .width(Length::Fill)
                    .height(Length::Fill)
                    .align_x(Horizontal::Center)
                    .align_y(Vertical::Center),
            )
            .width(Length::Units(31))
            .style(theme::Button::Text)
            .on_press(SpinButtonEvent::EditValue)
            .into()
        } else {
            text_input("0", &value.to_string(), SpinButtonEvent::ValueChanged)
                .width(Length::Units(31))
                .into()
        };
        container(
            row![
                button(
                        container(text("-").size(26).vertical_alignment(Vertical::Center))
                        .width(Length::Fill)
                        .height(Length::Fill)
                        .align_x(Horizontal::Center)
                        .align_y(Vertical::Center),
                )
                .width(Length::Fill)
                .height(Length::Fill)
                .style(theme::Button::Text)
                .on_press(SpinButtonEvent::DecrementPressed),
                // TODO: Remove border
                value_container,
                button(
                        container(text("+").size(26).vertical_alignment(Vertical::Center))
                        .width(Length::Fill)
                        .height(Length::Fill)
                        .align_x(Horizontal::Center)
                        .align_y(Vertical::Center),
                )
                .width(Length::Fill)
                .height(Length::Fill)
                .style(theme::Button::Text)
                .on_press(SpinButtonEvent::IncrementPressed),
            ]
            .width(Length::Fill)
            .height(Length::Units(32))
            .align_items(Alignment::Center),
        )
        .padding([4, 4])
        .align_y(Vertical::Center)
        .width(Length::Units(95))
        .height(Length::Units(32))
        .style(theme::Container::Custom(spin_button_container_style))
        .into()
    }
}

pub fn spin_button_container_style(theme: &Theme) -> iced_style::container::Appearance {
    let secondary = &theme.cosmic().secondary;
    let accent = &theme.cosmic().accent;
    iced_style::container::Appearance {
        text_color: Default::default(),
        background: Some(Background::Color(secondary.component.base.into())),
        border_radius: 24.0,
        border_width: 0.0,
        border_color: accent.base.into(),
    }
}

impl<'a, Message: Clone + 'a> From<SpinButton<'a, Message>> for Element<'a, Message> {
    fn from(spin_button: SpinButton<'a, Message>) -> Self {
        iced_lazy::component(spin_button)
    }
}
