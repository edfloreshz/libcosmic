(function() {var type_impls = {
"read_fonts":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3517-3526\">source</a><a href=\"#impl-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.format\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3519-3525\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html#tymethod.format\" class=\"fn\">format</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/core/primitive.u16.html\">u16</a></h4></section></summary><div class=\"docblock\"><p>Format identifier: format = 1</p>\n</div></details></div></details>",0,"read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FontRead%3C'a%3E-for-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3528-3538\">source</a><a href=\"#impl-FontRead%3C'a%3E-for-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"read_fonts/trait.FontRead.html\" title=\"trait read_fonts::FontRead\">FontRead</a>&lt;'a&gt; for <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3529-3537\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"read_fonts/trait.FontRead.html#tymethod.read\" class=\"fn\">read</a>(data: <a class=\"struct\" href=\"read_fonts/struct.FontData.html\" title=\"struct read_fonts::FontData\">FontData</a>&lt;'a&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"read_fonts/enum.ReadError.html\" title=\"enum read_fonts::ReadError\">ReadError</a>&gt;</h4></section></summary><div class='docblock'>Read an instace of <code>Self</code> from the provided data, performing validation. <a href=\"read_fonts/trait.FontRead.html#tymethod.read\">Read more</a></div></details></div></details>","FontRead<'a>","read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ChainedSequenceContext%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3510\">source</a><a href=\"#impl-Clone-for-ChainedSequenceContext%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#3510\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"read_fonts/tables/layout/enum.ChainedSequenceContext.html\" title=\"enum read_fonts::tables::layout::ChainedSequenceContext\">ChainedSequenceContext</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/core/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","read_fonts::tables::gpos::PositionChainContext","read_fonts::tables::gsub::SubstitutionChainContext"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()