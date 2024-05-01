(function() {var type_impls = {
"drm":[],
"drm_ffi":[],
"iced_graphics":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ComponentOrder%3CC,+u64%3E-for-T\" class=\"impl\"><a class=\"src rightside\" href=\"src/palette/cast/packed.rs.html#231-233\">source</a><a href=\"#impl-ComponentOrder%3CC,+u64%3E-for-T\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C, T&gt; <a class=\"trait\" href=\"palette/cast/packed/trait.ComponentOrder.html\" title=\"trait palette::cast::packed::ComponentOrder\">ComponentOrder</a>&lt;C, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>&gt; for T<div class=\"where\">where\n    T: <a class=\"trait\" href=\"palette/cast/packed/trait.ComponentOrder.html\" title=\"trait palette::cast::packed::ComponentOrder\">ComponentOrder</a>&lt;C, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.array.html\">8</a>]&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.pack\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/palette/cast/packed.rs.html#236\">source</a><a href=\"#method.pack\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"palette/cast/packed/trait.ComponentOrder.html#tymethod.pack\" class=\"fn\">pack</a>(color: C) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Combine the components of a color into the packed format.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unpack\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/palette/cast/packed.rs.html#241\">source</a><a href=\"#method.unpack\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"palette/cast/packed/trait.ComponentOrder.html#tymethod.unpack\" class=\"fn\">unpack</a>(packed: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>) -&gt; C</h4></section></summary><div class='docblock'>Split the packed color into its separate components.</div></details></div></details>","ComponentOrder<C, u64>","iced_graphics::text::cache::KeyHash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadEndian%3Cu64%3E-for-R\" class=\"impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#422-427\">source</a><a href=\"#impl-ReadEndian%3Cu64%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"trait\" href=\"lebe/io/trait.ReadEndian.html\" title=\"trait lebe::io::ReadEndian\">ReadEndian</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_little_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.read_from_little_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.ReadEndian.html#tymethod.read_from_little_endian_into\" class=\"fn\">read_from_little_endian_into</a>(&amp;mut self, value: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_big_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.read_from_big_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.ReadEndian.html#tymethod.read_from_big_endian_into\" class=\"fn\">read_from_big_endian_into</a>(&amp;mut self, value: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_native_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#317\">source</a><a href=\"#method.read_from_native_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.ReadEndian.html#method.read_from_native_endian_into\" class=\"fn\">read_from_native_endian_into</a>(&amp;mut self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_little_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#324\">source</a><a href=\"#method.read_from_little_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.ReadEndian.html#method.read_from_little_endian\" class=\"fn\">read_from_little_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_big_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#332\">source</a><a href=\"#method.read_from_big_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.ReadEndian.html#method.read_from_big_endian\" class=\"fn\">read_from_big_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_native_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#340\">source</a><a href=\"#method.read_from_native_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.ReadEndian.html#method.read_from_native_endian\" class=\"fn\">read_from_native_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details></div></details>","ReadEndian<u64>","iced_graphics::text::cache::KeyHash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WriteEndian%3Cu64%3E-for-W\" class=\"impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#422-427\">source</a><a href=\"#impl-WriteEndian%3Cu64%3E-for-W\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;W&gt; <a class=\"trait\" href=\"lebe/io/trait.WriteEndian.html\" title=\"trait lebe::io::WriteEndian\">WriteEndian</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>&gt; for W<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_as_little_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.write_as_little_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.WriteEndian.html#tymethod.write_as_little_endian\" class=\"fn\">write_as_little_endian</a>(&amp;mut self, value: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Write the byte value of the specified reference, converting it to little endianness</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_as_big_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.write_as_big_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.WriteEndian.html#tymethod.write_as_big_endian\" class=\"fn\">write_as_big_endian</a>(&amp;mut self, value: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Write the byte value of the specified reference, converting it to big endianness</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_as_native_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lebe/lib.rs.html#296\">source</a><a href=\"#method.write_as_native_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lebe/io/trait.WriteEndian.html#method.write_as_native_endian\" class=\"fn\">write_as_native_endian</a>(&amp;mut self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Write the byte value of the specified reference, not converting it</div></details></div></details>","WriteEndian<u64>","iced_graphics::text::cache::KeyHash"]],
"phf_shared":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FmtConst-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#153\">source</a><a href=\"#impl-FmtConst-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"phf_shared/trait.FmtConst.html\" title=\"trait phf_shared::FmtConst\">FmtConst</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt_const\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#153\">source</a><a href=\"#method.fmt_const\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.FmtConst.html#tymethod.fmt_const\" class=\"fn\">fmt_const</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Print a <code>const</code> expression representing this value.</div></details></div></details>","FmtConst","phf_shared::HashKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PhfHash-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#357\">source</a><a href=\"#impl-PhfHash-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"phf_shared/trait.PhfHash.html\" title=\"trait phf_shared::PhfHash\">PhfHash</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.phf_hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#357\">source</a><a href=\"#method.phf_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.PhfHash.html#tymethod.phf_hash\" class=\"fn\">phf_hash</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)</h4></section></summary><div class='docblock'>Feeds the value into the state given, updating the hasher as necessary.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.phf_hash_slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#72-79\">source</a><a href=\"#method.phf_hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.PhfHash.html#method.phf_hash_slice\" class=\"fn\">phf_hash_slice</a>&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the state provided.</div></details></div></details>","PhfHash","phf_shared::HashKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PhfBorrow%3Cu64%3E-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#172-189\">source</a><a href=\"#impl-PhfBorrow%3Cu64%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"phf_shared/trait.PhfBorrow.html\" title=\"trait phf_shared::PhfBorrow\">PhfBorrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.borrow\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/phf_shared/lib.rs.html#172-189\">source</a><a href=\"#method.borrow\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"phf_shared/trait.PhfBorrow.html#tymethod.borrow\" class=\"fn\">borrow</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Convert a reference to <code>self</code> to a reference to the borrowed type.</div></details></div></details>","PhfBorrow<u64>","phf_shared::HashKey"]],
"rustix":[],
"serde":[],
"winit":[],
"x11_dl":[],
"x11rb":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#374\">source</a><a href=\"#impl-TryParse-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#374\">source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb/rust_connection/enum.ParseError.html\" title=\"enum x11rb::rust_connection::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb::connection::SequenceNumber"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#383\">source</a><a href=\"#impl-Serialize-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.array.html\">8</a>]</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#383\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>&gt;::<a class=\"associatedtype\" href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" title=\"type x11rb::x11_utils::Serialize::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#383\">source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb::connection::SequenceNumber"]],
"x11rb_protocol":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#374\">source</a><a href=\"#impl-TryParse-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.TryParse.html\" title=\"trait x11rb_protocol::x11_utils::TryParse\">TryParse</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#374\">source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Self, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb_protocol/errors/enum.ParseError.html\" title=\"enum x11rb_protocol::errors::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb_protocol/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb_protocol::SequenceNumber"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-u64\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#383\">source</a><a href=\"#impl-Serialize-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html\" title=\"trait x11rb_protocol::x11_utils::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.array.html\">8</a>]</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#383\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\" title=\"type x11rb_protocol::x11_utils::Serialize::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#383\">source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb_protocol::SequenceNumber"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()