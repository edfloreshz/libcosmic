(function() {var type_impls = {
"usvg":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#375\">source</a><a href=\"#impl-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#380\">source</a><h4 class=\"code-header\">pub fn <a href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html#tymethod.new\" class=\"fn\">new</a>(n: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f32.html\">f32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>NonZeroPositiveF32</code> if the given value is &gt; 0.</p>\n<p>Returns <code>None</code> for negative, zero, NaN and infinity.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#394\">source</a><h4 class=\"code-header\">pub const unsafe fn <a href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html#tymethod.new_unchecked\" class=\"fn\">new_unchecked</a>(n: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f32.html\">f32</a>) -&gt; <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h4></section></summary><div class=\"docblock\"><p>Creates a new <code>NonZeroPositiveF32</code> without checking the value.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p><code>n</code> must be finite and &gt; 0.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#400\">source</a><h4 class=\"code-header\">pub const fn <a href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html#tymethod.get\" class=\"fn\">get</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f32.html\">f32</a></h4></section></summary><div class=\"docblock\"><p>Returns the value as a primitive type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_finite\" class=\"method\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#406\">source</a><h4 class=\"code-header\">pub const fn <a href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html#tymethod.get_finite\" class=\"fn\">get_finite</a>(&amp;self) -&gt; <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.FiniteF32.html\" title=\"struct usvg::tiny_skia_path::FiniteF32\">FiniteF32</a></h4></section></summary><div class=\"docblock\"><p>Returns the value as a <code>FiniteF32</code>.</p>\n</div></details></div></details>",0,"usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-PartialEq-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq%3Cf32%3E-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#411\">source</a><a href=\"#impl-PartialEq%3Cf32%3E-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#413\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f32.html\">f32</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq<f32>","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ApproxEqUlps-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#419\">source</a><a href=\"#impl-ApproxEqUlps-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"usvg/trait.ApproxEqUlps.html\" title=\"trait usvg::ApproxEqUlps\">ApproxEqUlps</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Flt\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Flt\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"usvg/trait.ApproxEqUlps.html#associatedtype.Flt\" class=\"associatedtype\">Flt</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.f32.html\">f32</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.approx_eq_ulps\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#419\">source</a><a href=\"#method.approx_eq_ulps\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"usvg/trait.ApproxEqUlps.html#tymethod.approx_eq_ulps\" class=\"fn\">approx_eq_ulps</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a>, ulps: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i32.html\">i32</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be approximately equal\nwithin ULPs (Units of Least Precision) floating point representations.\nDiffering signs are always unequal with this method, and zeroes are only\nequal to zeroes. Use approx_eq() from the ApproxEq trait if that is more\nappropriate.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.approx_ne_ulps\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/float_cmp/ulps_eq.rs.html#29\">source</a><a href=\"#method.approx_ne_ulps\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"usvg/trait.ApproxEqUlps.html#method.approx_ne_ulps\" class=\"fn\">approx_ne_ulps</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Self</a>, ulps: &lt;Self::<a class=\"associatedtype\" href=\"usvg/trait.ApproxEqUlps.html#associatedtype.Flt\" title=\"type usvg::ApproxEqUlps::Flt\">Flt</a> as <a class=\"trait\" href=\"usvg/strict_num/trait.Ulps.html\" title=\"trait usvg::strict_num::Ulps\">Ulps</a>&gt;::<a class=\"associatedtype\" href=\"usvg/strict_num/trait.Ulps.html#associatedtype.U\" title=\"type usvg::strict_num::Ulps::U\">U</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be not approximately\nequal within ULPs (Units of Least Precision) floating point representations.\nDiffering signs are always unequal with this method, and zeroes are only\nequal to zeroes. Use approx_eq() from the ApproxEq trait if that is more\nappropriate.</div></details></div></details>","ApproxEqUlps","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#418\">source</a><a href=\"#impl-Display-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#418\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-Ord-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#830-832\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#850-852\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#875-878\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","usvg::StrokeWidth"],["<section id=\"impl-StructuralPartialEq-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-StructuralPartialEq-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section>","StructuralPartialEq","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-Debug-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-Clone-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-PartialOrd-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1127\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1144\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1160\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#1177\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","usvg::StrokeWidth"],["<section id=\"impl-Eq-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-Eq-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section>","Eq","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-Hash-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","usvg::StrokeWidth"],["<section id=\"impl-Copy-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#371\">source</a><a href=\"#impl-Copy-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section>","Copy","usvg::StrokeWidth"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ApproxEq-for-NonZeroPositiveF32\" class=\"impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#419\">source</a><a href=\"#impl-ApproxEq-for-NonZeroPositiveF32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"usvg/strict_num/trait.ApproxEq.html\" title=\"trait usvg::strict_num::ApproxEq\">ApproxEq</a> for <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Margin\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Margin\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"usvg/strict_num/trait.ApproxEq.html#associatedtype.Margin\" class=\"associatedtype\">Margin</a> = <a class=\"struct\" href=\"float_cmp/eq/struct.F32Margin.html\" title=\"struct float_cmp::eq::F32Margin\">F32Margin</a></h4></section></summary><div class='docblock'>This type type defines a margin within which two values are to be\nconsidered approximately equal. It must implement <code>Default</code> so that\n<code>approx_eq()</code> can be called on unknown types.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.approx_eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/strict_num/lib.rs.html#419\">source</a><a href=\"#method.approx_eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"usvg/strict_num/trait.ApproxEq.html#tymethod.approx_eq\" class=\"fn\">approx_eq</a>&lt;M&gt;(self, other: <a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a>, margin: M) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a><div class=\"where\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;<a class=\"struct\" href=\"usvg/tiny_skia_path/struct.NonZeroPositiveF32.html\" title=\"struct usvg::tiny_skia_path::NonZeroPositiveF32\">NonZeroPositiveF32</a> as <a class=\"trait\" href=\"usvg/strict_num/trait.ApproxEq.html\" title=\"trait usvg::strict_num::ApproxEq\">ApproxEq</a>&gt;::<a class=\"associatedtype\" href=\"usvg/strict_num/trait.ApproxEq.html#associatedtype.Margin\" title=\"type usvg::strict_num::ApproxEq::Margin\">Margin</a>&gt;,</div></h4></section></summary><div class='docblock'>This method tests that the <code>self</code> and <code>other</code> values are equal within <code>margin</code>\nof each other.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.approx_ne\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/float_cmp/eq.rs.html#23\">source</a><a href=\"#method.approx_ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"usvg/strict_num/trait.ApproxEq.html#method.approx_ne\" class=\"fn\">approx_ne</a>&lt;M&gt;(self, other: Self, margin: M) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a><div class=\"where\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Self::<a class=\"associatedtype\" href=\"usvg/strict_num/trait.ApproxEq.html#associatedtype.Margin\" title=\"type usvg::strict_num::ApproxEq::Margin\">Margin</a>&gt;,</div></h4></section></summary><div class='docblock'>This method tests that the <code>self</code> and <code>other</code> values are not within <code>margin</code>\nof each other.</div></details></div></details>","ApproxEq","usvg::StrokeWidth"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()