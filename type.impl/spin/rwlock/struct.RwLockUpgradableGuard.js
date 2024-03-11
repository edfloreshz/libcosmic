(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#502-522\">source</a><a href=\"#impl-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.upgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#512-521\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLockUpgradableGuard.html#tymethod.upgrade\" class=\"fn\">upgrade</a>(self) -&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;</h4></section></summary><div class=\"docblock\"><p>Upgrades an upgradeable lock guard to a writable lock guard.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n\n<span class=\"kw\">let </span>upgradeable = mylock.upgradeable_read(); <span class=\"comment\">// Readable, but not yet writable\n</span><span class=\"kw\">let </span>writable = upgradeable.upgrade();</code></pre></div>\n</div></details></div></details>",0,"spin::RwLockUpgradableGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#524-615\">source</a><a href=\"#impl-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#565-567\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLockUpgradableGuard.html#tymethod.try_upgrade\" class=\"fn\">try_upgrade</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T, R&gt;, Self&gt;</h4></section></summary><div class=\"docblock\"><p>Tries to upgrade an upgradeable lock guard to a writable lock guard.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n<span class=\"kw\">let </span>upgradeable = mylock.upgradeable_read(); <span class=\"comment\">// Readable, but not yet writable\n\n</span><span class=\"kw\">match </span>upgradeable.try_upgrade() {\n    <span class=\"prelude-val\">Ok</span>(writable) =&gt; <span class=\"comment\">/* upgrade successful - use writable lock guard */ </span>(),\n    <span class=\"prelude-val\">Err</span>(upgradeable) =&gt; <span class=\"comment\">/* upgrade unsuccessful */ </span>(),\n};</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.downgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#583-596\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLockUpgradableGuard.html#tymethod.downgrade\" class=\"fn\">downgrade</a>(self) -&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockReadGuard.html\" title=\"struct spin::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'rwlock, T&gt;</h4></section></summary><div class=\"docblock\"><p>Downgrades the upgradeable lock guard to a readable, shared lock guard. Cannot fail and is guaranteed not to spin.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">1</span>);\n\n<span class=\"kw\">let </span>upgradeable = mylock.upgradeable_read();\n<span class=\"macro\">assert!</span>(mylock.try_read().is_none());\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>upgradeable, <span class=\"number\">1</span>);\n\n<span class=\"kw\">let </span>readable = upgradeable.downgrade(); <span class=\"comment\">// This is guaranteed not to spin\n</span><span class=\"macro\">assert!</span>(mylock.try_read().is_some());\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>readable, <span class=\"number\">1</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.leak\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#610-614\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLockUpgradableGuard.html#tymethod.leak\" class=\"fn\">leak</a>(this: Self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/core/primitive.reference.html\">&amp;'rwlock T</a></h4></section></summary><div class=\"docblock\"><p>Leak the lock guard, yielding a reference to the underlying data.</p>\n<p>Note that this function will permanently lock the original lock.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n\n<span class=\"kw\">let </span>data: <span class=\"kw-2\">&amp;</span>i32 = spin::RwLockUpgradableGuard::leak(mylock.upgradeable_read());\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>data, <span class=\"number\">0</span>);</code></pre></div>\n</div></details></div></details>",0,"spin::RwLockUpgradableGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#764-772\">source</a><a href=\"#impl-Drop-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#765-771\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","spin::RwLockUpgradableGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#732-739\">source</a><a href=\"#impl-Deref-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#735-738\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/core/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","spin::RwLockUpgradableGuard"],["<section id=\"impl-Sync-for-RwLockUpgradableGuard%3C'_,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#121\">source</a><a href=\"#impl-Sync-for-RwLockUpgradableGuard%3C'_,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'_, T, R&gt;</h3></section>","Sync","spin::RwLockUpgradableGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#617-621\">source</a><a href=\"#impl-Debug-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#618-620\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spin::RwLockUpgradableGuard"],["<section id=\"impl-Send-for-RwLockUpgradableGuard%3C'_,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#120\">source</a><a href=\"#impl-Send-for-RwLockUpgradableGuard%3C'_,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'_, T, R&gt;</h3></section>","Send","spin::RwLockUpgradableGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#623-627\">source</a><a href=\"#impl-Display-for-RwLockUpgradableGuard%3C'rwlock,+T,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'rwlock, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'rwlock, T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#624-626\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","spin::RwLockUpgradableGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()