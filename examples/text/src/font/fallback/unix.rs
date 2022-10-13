use unicode_script::Script;

// Fallbacks to use after any script specific fallbacks
pub fn common_fallback() -> &'static [&'static str] {
    //TODO: abstract style (sans/serif/monospaced)
    &[
        "DejaVu Sans",
        "FreeSans",
        "Noto Sans Symbols",
        "Noto Sans Symbols2",
        "Noto Color Emoji",
        //TODO: Add CJK script here for doublewides?
    ]
}

// Fallbacks to use per script
pub fn script_fallback(script: &Script, locale: &str) -> &'static [&'static str] {
    //TODO: abstract style (sans/serif/monospaced)
    match script {
        Script::Adlam => &["Noto Sans Adlam", "Noto Sans Adlam Unjoined"],
        Script::Arabic => &["Noto Sans Arabic"],
        Script::Armenian => &["Noto Sans Armenian"],
        Script::Bengali => &["Noto Sans Bengali"],
        Script::Chakma => &["Noto Sans Chakma"],
        Script::Cherokee => &["Noto Sans Cherokee"],
        Script::Devanagari => &["Noto Sans Devanagari"],
        Script::Ethiopic => &["Noto Sans Ethiopic"],
        Script::Hangul => &["Noto Sans CJK KR"],
        Script::Georgian => &["Noto Sans Georgian"],
        Script::Grantha => &["Noto Sans Grantha"],
        Script::Gujarati => &["Noto Sans Gujarati"],
        Script::Gurmukhi => &["Noto Sans Gurmukhi"],
        Script::Han => match locale {
            // Japan
            "ja" => &["Noto Sans CJK JA"],
            // Korea
            "ko" => &["Noto Sans CJK KR"],
            // China
            "zh-CN" => &["Noto Sans CJK SC"],
            // Hong Kong
            "zh-HK" => &["Noto Sans CJK HK"],
            // Taiwan
            "zh-TW" => &["Noto Sans CJK TC"],
            // Simplified Chinese is the default
            _ => &["Noto Sans CJK SC"],
        },
        Script::Hebrew => &["Noto Sans Hebrew"],
        Script::Hiragana => &["Noto Sans CJK JP"],
        Script::Javanese => &["Noto Sans Javanese"],
        Script::Kannada => &["Noto Sans Kannada"],
        Script::Katakana => &["Noto Sans CJK JP"],
        Script::Khmer => &["Noto Sans Khmer"],
        Script::Lao => &["Noto Sans Lao"],
        Script::Malayalam => &["Noto Sans Malayalam"],
        Script::Mongolian => &["Noto Sans Mongolian"],
        Script::Myanmar => &["Noto Sans Myanmar"],
        Script::Sinhala => &["Noto Sans Sinhala"],
        Script::Syriac => &["Noto Sans Syriac"],
        Script::Tai_Le => &["Noto Sans Tai Le"],
        Script::Tai_Tham => &["Noto Sans Tai Tham"],
        Script::Tai_Viet => &["Noto Sans Tai Viet"],
        Script::Tagalog => &["Noto Sans Tagalog"],
        Script::Tamil => &["Noto Sans Tamil"],
        Script::Telugu => &["Noto Sans Telugu"],
        Script::Thaana => &["Noto Sans Thaana"],
        Script::Thai => &["Noto Sans Thai"],
        //TODO: no sans script?
        Script::Tibetan => &["Noto Serif Tibetan"],
        Script::Tifinagh => &["Noto Sans Tifinagh"],
        Script::Vai => &["Noto Sans Vai"],
        Script::Yi => &["Noto Sans Yi", "Noto Sans CJK SC"],
        _ => &[],
    }
}
