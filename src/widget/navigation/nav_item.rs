use derive_setters::Setters;

#[derive(Setters, Clone, Default, PartialOrd, PartialEq, Ord, Eq)]
pub struct NavItem {
    #[setters(into)]
    pub title: String,
    #[setters(into)]
    pub icon: String,
    #[setters(strip_option)]
    pub children: Option<Vec<NavItem>>
}

impl NavItem {
    pub fn new() -> Self {
        Self {
            title: String::new(),
            icon: String::new(),
            children: None,
        }
    }
}

pub fn nav_item() -> NavItem {
    NavItem::new()
}