webpackJsonp([132],{1576:function(e,o,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return v.default.createElement(e.tag,(0,x.default)({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function l(e){return v.default.createElement(c,{tag:"section",html:e.html,attributes:{className:"zandoc-react-markdown"}})}function d(e){return v.default.createElement(c,{tag:"style",html:e.style})}function a(e,o){for(;e;)return e.offsetTop&&"static"!==getComputedStyle(e).position&&(o+=e.offsetTop),a(e.parentNode,o);return o}Object.defineProperty(o,"__esModule",{value:!0});var t=n(1),s=i(t),r=n(4),p=i(r),u=n(2),h=i(u),g=n(3),m=i(g),f=n(7),x=i(f),w=n(0),v=i(w),b=n(229),F=i(b),k=(function(e){function o(){var e,n,i,c;(0,s.default)(this,o);for(var l=arguments.length,d=Array(l),a=0;a<l;a++)d[a]=arguments[a];return n=i=(0,h.default)(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(d))),i.state={showCode:!1},i.toggle=function(){i.setState({showCode:!i.state.showCode})},c=n,(0,h.default)(i,c)}(0,m.default)(o,e),(0,p.default)(o,[{key:"render",value:function(){var e=this.state.showCode,o=this.props,n=o.title,i=o.src,l=o.children;return v.default.createElement("div",{className:"zandoc-react-demo"},v.default.createElement("div",{className:"zandoc-react-demo__preview"},l),v.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.default.createElement("div",{className:"zandoc-react-demo__title"},v.default.createElement("p",null,n||"")),v.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(e?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),e&&v.default.createElement("pre",{className:"zandoc-react-demo__code"},v.default.createElement(c,{tag:"code",html:i,attributes:{className:"language-jsx"}})))}}])}(w.Component),function(e){function o(){return(0,s.default)(this,o),(0,h.default)(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return(0,m.default)(o,e),(0,p.default)(o,[{key:"componentDidMount",value:function(){var e=location.hash;if(e){var o=document.querySelector('a[href="'+e+'"]');o&&(0,F.default)(document.documentElement,0,a(o,-9))}}},{key:"render",value:function(){return v.default.createElement("div",{className:"zandoc-react-container",key:null},v.default.createElement(d,{style:""}),v.default.createElement(l,{html:'<h2 class="anchor-heading"><a href="#change-log">¶</a><a href="javascript:void(0)" id="change-log" class="anchor-point"></a>Change Log</h2>\n<p>You can find detailed change logs for versions prior to 3.5.3 at <a href="github_changelog#zent-3-5-2-2017-09-07">Github Log</a>.</p>\n<h3 class="anchor-heading"><a href="#upgrade-guides">¶</a><a href="javascript:void(0)" id="upgrade-guides" class="anchor-point"></a>Upgrade guides</h3>\n<ul>\n<li><a href="../migrating/3x">Upgrade to 3.x</a></li>\n<li><a href="../migrating/21x">Upgrade to 2.1.x</a></li>\n</ul>\n<h3 class="anchor-heading"><a href="#6-0-0-2018-07-04">¶</a><a href="javascript:void(0)" id="6-0-0-2018-07-04" class="anchor-point"></a>6.0.0 (2018-07-04)</h3>\n<blockquote>\n<p>React &#x3C;= 15.3 is no longer supported</p>\n<p>Documentation site is now on <a href="https://youzan.github.io/zent">github pages</a></p>\n</blockquote>\n<ul>\n<li>💥 [breaking change] Remove <code>on</code>, <code>off</code> and <code>newInstance</code> static methods in <code>Loadign</code></li>\n<li>💥 [breaking change] Fix <code>WeekPicker</code> disable and selection logic</li>\n<li>💥 [breaking change] <code>Table</code> cell now uses <code>border-box</code></li>\n<li>💥 [breaking change] Remove <code>zent-select</code> from <code>Select</code> popover, this class should only be on the trigger</li>\n<li>🎉 New component <code>Mention</code></li>\n<li>🎉 New component <code>Timeline</code></li>\n<li>🎉 Rewrite <code>Tree</code>, add <code>useNew</code> prop to use this new version. APIs are compatible with the old one, and a controlled mode is added in this new version.</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>✨ <code>FieldArray</code> supports calling calling date date manipulation funcitons in a chain, e.g. <code>push</code>, <code>shift</code></li>\n<li>✨ <code>DateRangePickerField</code> and <code>DateRangeQuickPickerField</code> supports passing <code>format</code> prop to the underlying componets using <code>dateFormat</code></li>\n<li>✨ Add missing <code>DatePicker</code> related <code>Field</code>s，e.g. <code>FormWeekPickerField</code></li>\n<li>✨ <code>FieldArray</code> supports initialization using <code>setFieldsValue</code> and <code>initialize</code></li>\n</ul>\n</li>\n<li>\n<p><code>Grid</code></p>\n<ul>\n<li>✨ Add missing <code>TypeScript</code> definition</li>\n<li>✨ Add support for row expansion using the same <code>expandation</code> prop as <code>Table</code></li>\n<li>✨ Add a new <code>onExpand</code> callback when a row is expanded</li>\n<li>✨ Support page size in <code>onChange</code> </li>\n<li>🦀️ Remove <code>cloneDeep</code> usage，cloning a react element in React 16 results an error</li>\n<li>🦀️ Fix <code>rowKey</code> not working</li>\n<li>📚 Update documentation</li>\n</ul>\n</li>\n<li>\n<p><code>ErrorBoundary</code></p>\n<ul>\n<li>✨ Add a new <code>catchError</code> HOC，useful when using decorator</li>\n<li>📚 Fix <code>withErrorBoundary</code> documentation</li>\n</ul>\n</li>\n<li>\n<p><code>Cascader</code></p>\n<ul>\n<li>✨ Add <code>displayText</code> to customize value display</li>\n<li>🦀️ Fix a bug if <code>value</code> does not exist</li>\n</ul>\n</li>\n<li>✨ <code>AutoComplete</code> now handles <code>TAB</code></li>\n<li>✨ <code>SplitButton</code> supports dropdown position configuration</li>\n<li>✨ <code>Table</code> now passes page size in its <code>onChange</code> callback</li>\n<li>✨ <code>Pagination</code> now triggers <code>onPageSizeChange</code> callback when page size changes</li>\n<li>✨ The <code>onChange</code> callback now supports page size in <code>Table</code></li>\n<li>🦀️ Fix <code>BlockHeader</code> HTML tag nesting bug(a <code>div</code> cannot be inside a <code>p</code>)</li>\n<li>🦀️ Fix <code>Avatar</code>\'s <code>TypeScript</code> definition</li>\n<li>🦀️ Fix <code>Sortable</code>\'s <code>TypeScript</code> definition</li>\n<li>🦀️ Fix <code>SplitButton</code>\'s <code>TypeScript</code> definition</li>\n<li>🦀️ Fix <code>Tabs</code>\'s <code>TypeScript</code> definition</li>\n<li>🦀️ Add a few more icons</li>\n<li>🦀️ Fix <code>addonBefore</code> and <code>addonAfter</code> style in <code>Input</code></li>\n<li>🦀️ Fix a bug in <code>Swiper</code> when removing the second last element</li>\n<li>🦀️ Fix error when closing <code>Loading</code> in React 16</li>\n<li>\n<p><code>Dialog</code></p>\n<ul>\n<li>🦀️ Fix a bug when closing dialog</li>\n<li>🦀️ Fix a bug when used in SSR</li>\n</ul>\n</li>\n<li>🦀️ Fix some typo in <code>Button</code></li>\n<li>🦀️ Fix <code>Collapse</code> prop type</li>\n<li>🦀️ Fix <code>DatePicker</code> time disable logic</li>\n<li>🦀️ Fix a bug when calling <code>focus</code> in <code>Select</code></li>\n<li>🦀️ Remove some unused style in <code>Card</code></li>\n<li>📚 Fix typo <code>babel</code></li>\n</ul>\n<h4 class="anchor-heading"><a href="#breaking-change-workaronds">¶</a><a href="javascript:void(0)" id="breaking-change-workaronds" class="anchor-point"></a>Breaking change workaronds</h4>\n<blockquote>\n<p><code>Loading</code> <code>on</code>, <code>off</code>, <code>newInstance</code> workaround：</p>\n</blockquote>\n<p>Replace <code>Loading.on</code> and <code>Loading.off</code> with a <code>Loading</code> instance, and controll it using component state.</p>\n<pre><code class="language-js"><span class="token operator">&#x3C;</span>Loading float show<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></code></pre>\n<p>If you use <code>newInstance</code>, just render multile <code>&#x3C;Loading></code> instances.</p>\n<blockquote>\n<p><code>WeekPicker</code> workaround:</p>\n</blockquote>\n<ul>\n<li>If you are not using <code>disabledDate</code>, then you\'re mostly fine.</li>\n<li><code>WeekPicker</code> now returns only the dates can be selected, but in old versions it will return the whole week including those disabled dates.</li>\n<li>The <code>[start, end]</code> value in <code>disabledDate</code> has some change in time part. The <code>start</code> has time set to <code>00:00:00:000</code> while the <code>end</code> has time set to <code>23:59:59:999</code>.</li>\n<li>If your code relies on the time part when comparing two <code>Date</code> objects, you are likely in trouble with this new bahavior. Either ajust your logic to get the time part correct, or don\'t rely on time part when comparing two <code>Date</code> objects.</li>\n</ul>\n<blockquote>\n<p><code>Table</code> cell style workaround:</p>\n</blockquote>\n<p><code>Table</code>\'s cell <code>box-sizing</code> has changed to <code>border-box</code>, so you may have to adjust your column width.</p>\n<blockquote>\n<p><code>Select</code> <code>zent-select</code> workaround:</p>\n</blockquote>\n<p>If you rely on <code>zent-select</code> when overwriting <code>Select</code> popover style, use <code>zent-select__popover</code> instead.</p>\n<h3 class="anchor-heading"><a href="#5-1-1-2018-04-19">¶</a><a href="javascript:void(0)" id="5-1-1-2018-04-19" class="anchor-point"></a>5.1.1 (2018-04-19)</h3>\n<ul>\n<li>🦀️ Fix missing <code>Dialog</code> close animation in some cases</li>\n<li>🦀️ Fix incorrect <code>Table</code> cell width</li>\n<li>🦀️ Allow non <code>ControlGroup</code> in <code>Form</code> when scrolling to first error</li>\n<li>✨ Upgrade <code>lerna</code> to latest version</li>\n</ul>\n<h3 class="anchor-heading"><a href="#5-1-0-2018-04-17">¶</a><a href="javascript:void(0)" id="5-1-0-2018-04-17" class="anchor-point"></a>5.1.0 (2018-04-17)</h3>\n<ul>\n<li>🎉 New component <code>ErrorBoundary</code>, requires <code>React</code> >= 16</li>\n<li>🎉 New component <code>SplitButton</code></li>\n<li>✨ <code>previewImage</code> now supports image zoom</li>\n<li>✨ <code>BlockHeader</code> adds a new prop <code>childAlign</code> to control child position</li>\n<li>✨ Refactor <code>Portal</code>, add <code>PurePortal</code> and <code>LayeredPortal</code></li>\n<li>✨ Upgrade DnD library in <code>Design</code></li>\n<li>✨ Add open/close animation to <code>Dialog</code></li>\n<li>\n<p><code>YearPicker</code></p>\n<ul>\n<li>✨ Add  <code>max</code> and <code>min</code> support</li>\n<li>✨ <code>value</code> supports <code>Date</code> type</li>\n</ul>\n</li>\n<li>🦀️ Fix <code>Loading</code> <code>height</code> ignored in some cases</li>\n<li>🦀️ Fix <code>BlockHeader</code> style</li>\n<li>🦀️ Fix <code>Popover</code> wrong position in <code>React</code> 16</li>\n<li>🦀️ Fix <code>Form</code> <code>asyncValidate</code> not returning <code>Promise</code> in some cases</li>\n<li>🦀️ Fix <code>Pagination</code> style</li>\n<li>🦀️ <code>tag</code> mode in <code>Select</code> will not scroll when content overflows</li>\n<li>🦀️ Fix <code>Cascader</code> tests in <code>React</code> 16</li>\n<li>📚 Update screenshots in docs</li>\n</ul>\n<h3 class="anchor-heading"><a href="#5-0-1-2018-03-20">¶</a><a href="javascript:void(0)" id="5-0-1-2018-03-20" class="anchor-point"></a>5.0.1 (2018-03-20)</h3>\n<ul>\n<li>🦀️ Fix text overflow issues in <code>WeekPicker</code></li>\n<li>🦀️ Fix some build issues</li>\n</ul>\n<h3 class="anchor-heading"><a href="#5-0-0-2018-03-16">¶</a><a href="javascript:void(0)" id="5-0-0-2018-03-16" class="anchor-point"></a>5.0.0 (2018-03-16)</h3>\n<blockquote>\n<p>⚠️ <code>Upload</code> is broken in this version, do NOT use.</p>\n<p><code>React</code> 16 is now offically supported.</p>\n</blockquote>\n<ul>\n<li>🎉 Upgrade to <code>React</code> 16</li>\n<li>\n<p><code>Button</code></p>\n<ul>\n<li>✨ Add support for <code>Icons</code></li>\n<li>✨ New <code>Button.Group</code> component</li>\n</ul>\n</li>\n<li>✨ <code>Steps</code> now has a new state: <code>process</code>, and default state value is changed to <code>process</code></li>\n<li>🦀️ Fix height bug in <code>Loading</code></li>\n<li>🦀️ Fix <code>BlockHeader</code> style</li>\n<li>\n<p><code>Tree</code></p>\n<ul>\n<li>🦀️ Fix <code>expand</code> not working</li>\n<li>📚 Add doc about <code>loadMore</code></li>\n</ul>\n</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>✨ Allow custom error messages through <code>errorMessages</code></li>\n<li>🦀️ Move CSS class name to <code>zent-upload</code> namespace</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-3-2-2018-03-07">¶</a><a href="javascript:void(0)" id="4-3-2-2018-03-07" class="anchor-point"></a>4.3.2 (2018-03-07)</h3>\n<ul>\n<li>🦀️ Update <code>Loading</code> height logic</li>\n<li>🦀️ Fix text in <code>Pagination</code></li>\n<li>🦀️ Fix bugs when using nested <code>Radio</code> and <code>Checkbox</code></li>\n<li>🦀️ <code>Radio</code> and <code>Checkbox</code> will ignore <code>readonly</code> and <code>disabled</code> settings on itself if it is within a group</li>\n<li>🦀️ Fix <code>Upload</code> style issues</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-3-1-2018-03-05">¶</a><a href="javascript:void(0)" id="4-3-1-2018-03-05" class="anchor-point"></a>4.3.1 (2018-03-05)</h3>\n<blockquote>\n<p>⚠️ <code>Loading</code> style is broken in this version, do NOT use.</p>\n</blockquote>\n<ul>\n<li>🦀️ Fix wrong placeholder indentation when using tag style in <code>Select</code></li>\n<li>🦀️ Fix calling <code>adjustPosition</code> in <code>Popover</code> in some cases</li>\n<li>🦀️ Adjust font size in <code>Tree</code></li>\n<li>🦀️ Fix <code>Grid</code> style issues in Windows</li>\n<li>🦀️ Fix wrong selection in <code>CopyButton</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-3-0-2018-02-14">¶</a><a href="javascript:void(0)" id="4-3-0-2018-02-14" class="anchor-point"></a>4.3.0 (2018-02-14)</h3>\n<blockquote>\n<p>Happy Valentine\'s Day and happy Chinese New Year!</p>\n</blockquote>\n<ul>\n<li>🎉 New component <code>AutoComplete</code></li>\n<li>🎉 New component <code>Rate</code></li>\n<li>🦀️ Optimize <code>Notify</code> animation</li>\n<li>🦀️ Remove unnecessary <code>!important</code> in <code>Tabs</code> style</li>\n<li>🦀️ Fix input focus lost in <code>Select</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-3-2018-02-09">¶</a><a href="javascript:void(0)" id="4-2-3-2018-02-09" class="anchor-point"></a>4.2.3 (2018-02-09)</h3>\n<ul>\n<li>🦀️ Fix bug in <code>Sortable</code> when <code>items</code> is missing</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-2-2018-02-07">¶</a><a href="javascript:void(0)" id="4-2-2-2018-02-07" class="anchor-point"></a>4.2.2 (2018-02-07)</h3>\n<ul>\n<li>✨ Add vertical style to <code>Steps</code></li>\n<li>🦀️ Fix header height in <code>Grid</code></li>\n<li>🦀️ Fix styles missing after build</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-1-2018-02-06">¶</a><a href="javascript:void(0)" id="4-2-1-2018-02-06" class="anchor-point"></a>4.2.1 (2018-02-06)</h3>\n<blockquote>\n<p>⚠️ Styles are broken due to a building problem in this version, do NOT use.</p>\n</blockquote>\n<ul>\n<li>🦀️ Fix <code>Upload</code> file type bug</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-2-0-2018-02-05">¶</a><a href="javascript:void(0)" id="4-2-0-2018-02-05" class="anchor-point"></a>4.2.0 (2018-02-05)</h3>\n<blockquote>\n<p>⚠️ Styles are broken due to a building problem in this version, do NOT use.</p>\n</blockquote>\n<ul>\n<li>🎉 New component <code>Avatar</code></li>\n<li>🎉 New component <code>Collapase</code></li>\n<li>✨ <code>Menu</code> adds inline style</li>\n<li>✨ <code>Cascader</code> adds menu style</li>\n<li>✨ <code>Input</code> adds <code>fromClearButton</code> in callback event</li>\n<li>✨ Add missing <code>TypeScript</code> definitions</li>\n<li>✨ <code>Badge</code> supports custom offset</li>\n<li>✨ <code>NumberInput</code> supports presss enter to confirm input</li>\n<li>✨ <code>onUpload</code> can return a <code>Promise</code> in <code>Upload</code></li>\n<li>🦀️ Fix a bug in <code>Sortable</code> when <code>onMove</code>, <code>onEnd</code> and <code>onChange</code> are present at the same time</li>\n<li>🦀️ Fix can not start new line in textarea when using <code>Form</code></li>\n<li>🦀️ Fix styles in <code>InfiniteScroller</code></li>\n<li>🦀️ Fix keyboard events not working in <code>Select</code></li>\n<li>🦀️ Fix border style in <code>Grid</code></li>\n<li>🦀️ Fix infinite loop in <code>Select</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-1-0-2018-01-29">¶</a><a href="javascript:void(0)" id="4-1-0-2018-01-29" class="anchor-point"></a>4.1.0 (2018-01-29)</h3>\n<ul>\n<li>🎉 New component: <code>TimePicker</code> and <code>TimeRangePicker</code></li>\n<li>🎉 New compponent: <code>Placeholder</code>, a composable placeholder</li>\n<li>🎉 New documation site</li>\n<li>\n<p><code>Card</code></p>\n<ul>\n<li>✨ Supports <code>loading</code> state</li>\n<li>✨ Supports nested cards</li>\n<li>🦀️ Update styles</li>\n</ul>\n</li>\n<li>✨ Add <code>canClear</code> to <code>DatePicker</code> to control reset</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>✨ Category id can be passed from outside</li>\n<li>🦀️ Fix file amount can exceed <code>maxAmount</code></li>\n<li>🦀️ Fix auto open bug</li>\n</ul>\n</li>\n<li>🦀️ Fix <code>Notify</code> background color</li>\n</ul>\n<h3 class="anchor-heading"><a href="#4-0-0-2018-01-23">¶</a><a href="javascript:void(0)" id="4-0-0-2018-01-23" class="anchor-point"></a>4.0.0 (2018-01-23)</h3>\n<ul>\n<li>💥 Remove combine mode in <code>DateRangePicker</code>, <code>type</code> prop is removed.</li>\n<li>\n<p><code>Upload</code> </p>\n<ul>\n<li>✨ Supports file groups</li>\n<li>✨ Supports i18n</li>\n</ul>\n</li>\n<li>✨ Add support for icons in <code>Menu</code> </li>\n<li>\n<p><code>DatePicker</code></p>\n<ul>\n<li>🦀️ Fix minimum time not respected in some cases</li>\n<li>🦀️ Fix minimum time test bug</li>\n</ul>\n</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>🦀️ Fix styles in demos</li>\n<li>🦀️ <code>DesignEditor</code> no longer inherits <code>PureComponent</code></li>\n</ul>\n</li>\n<li>🦀️ Fix style in <code>Slider</code></li>\n<li>🦀️ Fix anchor not working in documentation site</li>\n<li>🦀️ Fix header not synchronized in <code>Grid</code></li>\n<li>🦀️ Tune <code>Notify</code> animation</li>\n<li>\n<p><code>Select</code></p>\n<ul>\n<li>🦀️ Fix compatibility bug in some browsers</li>\n<li>🦀️ Fix <code>emptyText</code> not working</li>\n</ul>\n</li>\n<li>🦀️ Fix demos in <code>Sortable</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-3-2018-01-10">¶</a><a href="javascript:void(0)" id="3-12-3-2018-01-10" class="anchor-point"></a>3.12.3 (2018-01-10)</h3>\n<ul>\n<li>🦀️ Fix <code>Slider</code> background</li>\n<li>🦀️ Support <code>image/bmp</code> in <code>Upload</code></li>\n<li>🦀️ Fix button styles and layout in <code>Design</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-2-2018-01-09">¶</a><a href="javascript:void(0)" id="3-12-2-2018-01-09" class="anchor-point"></a>3.12.2 (2018-01-09)</h3>\n<ul>\n<li>✨ Remove mask background when <code>Loading</code> has no <code>children</code></li>\n<li>✨ Rename files to follow the project naming style</li>\n<li>🦀️ Fix <code>Grid</code> header style</li>\n<li>🦀️ Fix font size in large <code>Button</code></li>\n<li>🦀️ Fix year not checked in <code>MonthPicker</code></li>\n<li>📚 New internationalization documentation</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-1-2018-01-05">¶</a><a href="javascript:void(0)" id="3-12-1-2018-01-05" class="anchor-point"></a>3.12.1 (2018-01-05)</h3>\n<ul>\n<li>🦀️ Fix <code>CombineDateRangePicker</code> closes before select the second date</li>\n<li>🦀️ Fix exit animation in <code>Notify</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-12-0-2018-01-04">¶</a><a href="javascript:void(0)" id="3-12-0-2018-01-04" class="anchor-point"></a>3.12.0 (2018-01-04)</h3>\n<ul>\n<li>🎉 New component <code>Sortable</code></li>\n<li>🎉 i18n support for components</li>\n<li>✨ <code>Tag</code> visibility can be controlled using props</li>\n<li>✨ <code>Input</code> supports clear button</li>\n<li>✨ <code>Grid</code> supports scroll with fixed header</li>\n<li>✨ <code>Notify</code> supports pile many instances with enter/leave animation</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>✨ <code>Field</code> supports <code>displayError</code> to control error message display</li>\n<li>✨ <code>Field</code> supports <code>relatedFields</code> to specify validation dependencies.</li>\n<li>✨ Rewrite <code>FieldArray</code></li>\n</ul>\n</li>\n<li>✨ <code>Swiper</code> supports add/remove images dynamically</li>\n<li>✨ <code>Design</code> supports <code>settings</code> and <code>onSettingsChange</code> to manage dynamic global settings</li>\n<li>✨ <code>Sweetalert</code> can configure close button and click on mask to close</li>\n<li>🦀️ Fix <code>DateRangePicker</code> disabled style</li>\n<li>🦀️ Fix <code>Loading</code> not centered</li>\n<li>🦀️ Fix <code>DatePicker</code> wrong value in <code>onChange</code> </li>\n<li>🦀️ Fix <code>NumberInput</code> inconsistent <code>onBlur</code> and <code>onChange</code> values</li>\n<li>🦀️ Fix <code>Upload</code> image order after uploading</li>\n<li>🦀️ Fix <code>Select</code> item order in tag mode</li>\n<li>🦀️ Fix can not edit hex in  <code>ColorPicker</code> </li>\n<li>🦀️ Fix <code>textarea</code> height tingle</li>\n<li>🦀️ Fix some typo</li>\n<li>🦀️ Fix <code>yarn new-component</code> command</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-11-0-2017-12-20">¶</a><a href="javascript:void(0)" id="3-11-0-2017-12-20" class="anchor-point"></a>3.11.0 (2017-12-20)</h3>\n<ul>\n<li>🎉 New component <code>QuarterPicker</code></li>\n<li>✨ <code>Select</code> can have a reset option</li>\n<li>✨ Support vertical scroll with fixed header in <code>Grid</code></li>\n<li>✨ No more confirm in <code>DatePicker</code> when used without time selection</li>\n<li>✨ Support image drag-and-drag in <code>Upload</code></li>\n<li>✨ Support autoresize for <code>textarea</code></li>\n<li>✨ Support character count in <code>textarea</code></li>\n<li>✨ Update pop position in <code>BlockHeader</code></li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ New image ad demo</li>\n<li>✨ New richtext demo</li>\n<li>✨ Allow custom content after preview section</li>\n</ul>\n</li>\n<li>✨ Add <code>onPositionUpdated</code> to <code>Popover</code> and <code>Pop</code></li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>✨ Change <code>required</code> rule，<code>null</code> is considered an error</li>\n<li>✨ Add option to disable form submition triggered by pressing Enter in input</li>\n<li>🦀️ Fix rerender when <code>validationOnChange</code> is <code>false</code></li>\n<li>🦀️ Support functional component in scroll to first error</li>\n</ul>\n</li>\n<li>\n<p><code>Swiper</code></p>\n<ul>\n<li>🦀️ Fix bug with only one image</li>\n<li>🦀️ Fix animation when quickly click on prev/next button</li>\n</ul>\n</li>\n<li>🦀️ Fix image not centered in <code>Loading</code></li>\n<li>🦀️ Allow <code>scroll</code> function to run in <code>node.js</code></li>\n<li>🦀️ Fix bug when using <code>batchcomponents</code> in <code>Form</code></li>\n<li>📚 Fix <code>InfiniteScroller</code> documentation</li>\n<li>📚 Fix <code>Button</code> demo</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-7-2017-12-07">¶</a><a href="javascript:void(0)" id="3-10-7-2017-12-07" class="anchor-point"></a>3.10.7 (2017-12-07)</h3>\n<ul>\n<li>✨ Allow custom styles to be applied in <code>Menu</code></li>\n<li>🦀️ Fix single file uploading in <code>Upload</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-6-2017-12-06">¶</a><a href="javascript:void(0)" id="3-10-6-2017-12-06" class="anchor-point"></a>3.10.6 (2017-12-06)</h3>\n<ul>\n<li>✨ <code>Form</code> supports scroll to first error</li>\n<li>🦀️ <code>Upload</code> adds support for file filter</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-5-2017-12-05">¶</a><a href="javascript:void(0)" id="3-10-5-2017-12-05" class="anchor-point"></a>3.10.5 (2017-12-05)</h3>\n<ul>\n<li>🦀️ Revert <code>Design</code>\'s preview width to <code>320px</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-4-2017-12-04">¶</a><a href="javascript:void(0)" id="3-10-4-2017-12-04" class="anchor-point"></a>3.10.4 (2017-12-04)</h3>\n<ul>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ Preview width is now <code>375px</code></li>\n<li>🦀️ Update styles</li>\n</ul>\n</li>\n<li>✨ <code>Pop</code> and <code>Popover</code> exports <code>adjustPosition</code>, it is rarely needed but can be used to trigger manual position update in some cases.</li>\n<li>🦀️ Fix <code>Button</code> broken style in some cases.</li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>🦀️ Update styles</li>\n<li>🦀️ Fix some ES6 compatibility issues</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-3-2017-11-29">¶</a><a href="javascript:void(0)" id="3-10-3-2017-11-29" class="anchor-point"></a>3.10.3 (2017-11-29)</h3>\n<ul>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>🦀️ Fix <code>accept</code> not working</li>\n<li>🦀️ Fix audio uplaod</li>\n</ul>\n</li>\n<li>🦀️ Fix <code>Pagination</code> style</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ Update add component button style</li>\n<li>✨ Optimize add component</li>\n<li>🦀️ Remove auto scroll when adding/removing component</li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-2-2017-11-28">¶</a><a href="javascript:void(0)" id="3-10-2-2017-11-28" class="anchor-point"></a>3.10.2 (2017-11-28)</h3>\n<ul>\n<li>🦀️ Fix <code>accept</code> not working in <code>Upload</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-1-2017-11-27">¶</a><a href="javascript:void(0)" id="3-10-1-2017-11-27" class="anchor-point"></a>3.10.1 (2017-11-27)</h3>\n<ul>\n<li>🎉 Add a new style for <code>NumberInput</code>, just set <code>showCounter</code> to <code>true</code></li>\n<li>\n<p><code>Upload</code></p>\n<ul>\n<li>✨ Enhance file type check</li>\n<li>✨ Supports audio upload</li>\n<li>🦀️ Fix remove wrong image</li>\n</ul>\n</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>🦀️ Fix some style issues</li>\n<li>✨ Add <code>canInsert</code>, <code>canDelete</code> to control Add/Delete button visiblity</li>\n</ul>\n</li>\n<li>🦀️ Fix <code>Form</code> cannot submit when containing async validations</li>\n<li>🦀️ Fix <code>Pop</code>\'s TypeScript definition</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-10-0-2017-11-24">¶</a><a href="javascript:void(0)" id="3-10-0-2017-11-24" class="anchor-point"></a>3.10.0 (2017-11-24)</h3>\n<ul>\n<li>🎉 New <code>YearPicker</code> component</li>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ New add component UI</li>\n<li>✨ Remove dependency on <code>react-dnd</code></li>\n</ul>\n</li>\n<li>🦀️ Allow empty data in <code>Cascader</code></li>\n</ul>\n<p>If your <code>Desgin</code> componets rely on <code>react-dnd</code>, you may have to inject <code>react-dnd</code>\'s context into your app.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> HTML5Backend <span class="token keyword">from</span> <span class="token string">\'react-dnd-html5-backend\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DragDropContextProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dnd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">YourApp</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>DragDropContextProvider</span> <span class="token attr-name">backend</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>HTML5Backend<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token comment">/* ... */</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>DragDropContextProvider</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 class="anchor-heading"><a href="#3-9-9-2017-11-22">¶</a><a href="javascript:void(0)" id="3-9-9-2017-11-22" class="anchor-point"></a>3.9.9 (2017-11-22)</h3>\n<ul>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>🦀️ Fix font color in add component popup</li>\n<li>🦀️ Temporarily removed the scroll into screen behavior when selecting a component</li>\n</ul>\n</li>\n<li>\n<p><code>Form</code></p>\n<ul>\n<li>🦀️ Fix <code>FieldArray</code> validation error after removing element</li>\n<li>🦀️ Fix corrupted data in nested <code>FieldArray</code></li>\n<li>🦀️ Fix typo in documentation</li>\n<li>🦀️ Fix <code>setFieldsValue</code> and <code>initialize</code> cannot set value to <code>0</code></li>\n<li>🦀️ Fix non-submit validation still reports error when <code>validateOnChange</code> and <code>validateOnBlur</code> both are <code>false</code></li>\n</ul>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-8-2017-11-21">¶</a><a href="javascript:void(0)" id="3-9-8-2017-11-21" class="anchor-point"></a>3.9.8 (2017-11-21)</h3>\n<ul>\n<li>🦀️ Update add/remove component UI in <code>Design</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-7-2017-11-20">¶</a><a href="javascript:void(0)" id="3-9-7-2017-11-20" class="anchor-point"></a>3.9.7 (2017-11-20)</h3>\n<ul>\n<li>🦀️ Fix grouped style in <code>Design</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-6-2017-11-20">¶</a><a href="javascript:void(0)" id="3-9-6-2017-11-20" class="anchor-point"></a>3.9.6 (2017-11-20)</h3>\n<ul>\n<li>\n<p><code>Design</code></p>\n<ul>\n<li>✨ Supports tooltip if component count reaches limit</li>\n<li>✨ Style updates</li>\n</ul>\n</li>\n<li>\n<p><code>Input</code></p>\n<ul>\n<li>✨ Add <code>select</code> method to support text selection; and a corresponding <code>autoSelect</code> prop</li>\n<li>🦀️ Fix styles in <code>disabled</code> state</li>\n</ul>\n</li>\n<li>🦀️ Fix cannot upload the same image twice in <code>Upload</code></li>\n<li>🦀️ Fix exceptions when <code>data</code> in <code>undefined</code> or <code>null</code> in <code>Select</code></li>\n<li>🦀️ Fix disable logic in  <code>MonthPicker</code></li>\n<li>🦀️ Fix <code>emptyLabel</code> type in <code>Table</code></li>\n<li>🦀️ Fix TypeScript definition for <code>Button</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-5-2017-11-13">¶</a><a href="javascript:void(0)" id="3-9-5-2017-11-13" class="anchor-point"></a>3.9.5 (2017-11-13)</h3>\n<ul>\n<li>✨ You can search components in doc site now.</li>\n<li>🦀️ Fix disable logic in  <code>DatePicker</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-4-2017-11-09">¶</a><a href="javascript:void(0)" id="3-9-4-2017-11-09" class="anchor-point"></a>3.9.4 (2017-11-09)</h3>\n<ul>\n<li>🦀️ Update English documentation</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-3-2017-11-09">¶</a><a href="javascript:void(0)" id="3-9-3-2017-11-09" class="anchor-point"></a>3.9.3 (2017-11-09)</h3>\n<ul>\n<li>🎉 New documentation site with English support</li>\n<li>✨ <code>Progress</code> adds the ability to customize colors</li>\n<li>✨ Form components(<code>Input</code>, <code>Select</code> etc.) now supports <code>width=xx</code> to set width</li>\n<li>✨ <code>Notify</code> now has a <code>config</code> method to set duration globally</li>\n<li>✨ <code>DatePicker</code> adds time support in <code>max</code> and <code>min</code></li>\n<li>🦀️ Fix async validations that haven\'t triggered before not triggered when submitting</li>\n<li>🦀️ Fix <code>getBoundingClientRect</code> errors in <code>Popover</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-2-2017-11-06">¶</a><a href="javascript:void(0)" id="3-9-2-2017-11-06" class="anchor-point"></a>3.9.2 (2017-11-06)</h3>\n<ul>\n<li>✨ <code>Design</code> now supports custom component type when creating new instance</li>\n<li>🦀️ Fix cross page selection not working in some circumstances</li>\n<li>🦀️ Fix some compatibility issues in React 16</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-1-2017-11-02">¶</a><a href="javascript:void(0)" id="3-9-1-2017-11-02" class="anchor-point"></a>3.9.1 (2017-11-02)</h3>\n<ul>\n<li>🦀️ Fix some style issues in <code>Design</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-9-0-2017-10-31">¶</a><a href="javascript:void(0)" id="3-9-0-2017-10-31" class="anchor-point"></a>3.9.0 (2017-10-31)</h3>\n<ul>\n<li>✨ Add global normalization style，just like <code>normalize.css</code> and <code>reset.css</code></li>\n<li>\n<p><code>Grid</code>:</p>\n<ul>\n<li>🦀️ Fix <code>colums</code> cannot be changed at runtime</li>\n<li>🦀️ Fix unmatched height between left and right fixed columns when line height is larger than default height</li>\n<li>🦀️ Fix right fixed column\'s shadow does not disappear when scroll to the right edge</li>\n</ul>\n</li>\n<li>🦀️ Fix a variable name in <code>Design</code></li>\n<li>🦀️ Fix <code>Form</code>\'s <code>ControlGroup</code> cannot render functional component</li>\n<li>📚 Update this site\'s styles</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-8-1-2017-10-26">¶</a><a href="javascript:void(0)" id="3-8-1-2017-10-26" class="anchor-point"></a>3.8.1 (2017-10-26)</h3>\n<ul>\n<li>🎉 New demo page, you can find it <a href="demos">here</a></li>\n<li>🎉 A new script to help create new components: <code>yarn new-component</code></li>\n<li>✨ Support row selection in <code>Table</code>, use <code>canRowSelect</code> to control this behavior, off by default</li>\n<li>\n<p><code>Design</code>:</p>\n<ul>\n<li>🦀️ Fix <code>defaultSelectedIndex</code>\'s logic</li>\n<li>🦀️ Fix button style in Chrome 62</li>\n</ul>\n</li>\n<li>🦀️ Fix <code>data</code> unexpectedly mutated in <code>Select</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#babel-plugin-zent-1-1-0-2017">¶</a><a href="javascript:void(0)" id="babel-plugin-zent-1-1-0-2017" class="anchor-point"></a>babel-plugin-zent@1.1.0 (2017-10-26)</h3>\n<ul>\n<li>✨ New <code>useRawStyle</code> option to support import postcss files, requires Zent >= 3.8.1</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-8-0-2017-10-20">¶</a><a href="javascript:void(0)" id="3-8-0-2017-10-20" class="anchor-point"></a>3.8.0 (2017-10-20)</h3>\n<ul>\n<li>🎉 New component <code>InfiniteScroller</code>, implements the scroll-to-load interaction.</li>\n<li>\n<p><code>Form</code>:</p>\n<ul>\n<li>🎉 Add <code>FormSection</code> and <code>FieldArray</code> support</li>\n<li>🎉 Add <code>setFieldsValue</code> adn <code>initialize</code></li>\n<li>🎉 More builtin form fields: <code>FormColorPickerField</code>, <code>FormDateRangePickerField</code>, <code>FormNumberInputField</code>, <code>FormSwitchField</code></li>\n<li>🎉 Add <code>notice</code> to <code>Field</code> to support notice</li>\n<li>✨ Add <code>setFormDirty</code> and <code>isFieldDirty</code></li>\n</ul>\n</li>\n<li>✨ Some optimizations in <code>Select</code></li>\n<li>✨ Add support to abort add component operation in <code>Design</code></li>\n<li>✨ <code>onBeforeClose</code> and <code>onBeforeShow</code> can abort current operation in <code>Popover</code></li>\n<li>🦀️ <code>Slider</code> now highlights dot and line correctly</li>\n<li>🦀️ Fix TypeScript definition for <code>DateRangePicker</code></li>\n<li>🦀 Fix a style issue in <code>SearchInput</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-7-0-2017-09-28">¶</a><a href="javascript:void(0)" id="3-7-0-2017-09-28" class="anchor-point"></a>3.7.0 (2017-09-28)</h3>\n<ul>\n<li>🎉 New component <code>Grid</code>, a rewrite of <code>Table</code> using HTML\'s <code>table</code>, some features are still missing in <code>Grid</code></li>\n<li>🎉 Zent now supports custom themes, add <a href="colors">Colors</a> and <a href="theme">Theme</a> documentations</li>\n<li>\n<p><code>Steps</code>:</p>\n<ul>\n<li>✨ Add support for <code>onStepChange</code> and <code>sequence</code></li>\n<li>✨ Update UI for <code>number</code> style</li>\n</ul>\n</li>\n<li>🦀️ Fix warnings with React 16</li>\n<li>🦀️ Fix warnings in <code>Slider</code>\'s documentation</li>\n<li>🦀️ Update styles for <code>DateRangeQuickPicker</code></li>\n<li>🦀️ Fix selection not reset after reseting <code>data</code> in <code>Select</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-6-1-2017-09-21">¶</a><a href="javascript:void(0)" id="3-6-1-2017-09-21" class="anchor-point"></a>3.6.1 (2017-09-21)</h3>\n<ul>\n<li>🦀️ Fix a style issue in <code>Design</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-6-0-2017-09-21">¶</a><a href="javascript:void(0)" id="3-6-0-2017-09-21" class="anchor-point"></a>3.6.0 (2017-09-21)</h3>\n<ul>\n<li>\n<p><code>Design</code>:</p>\n<ul>\n<li>✨ Supports grouped mode in add components area</li>\n<li>✨ Supports instance limit for each component</li>\n</ul>\n</li>\n<li>✨ <code>DatePicker</code> adds <code>onBeforeConfirm</code> and <code>onBeforeClear</code> hooks</li>\n<li>️🦀️ Fix select-all checkbox not disabled when there\'s no selectable rows in <code>Table</code></li>\n<li>🦀️ Fix incorrect position in <code>Popover</code> after scrolling the page</li>\n<li>🦀️ Fix disabled month is still selectable in <code>MonthPicker</code></li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-5-4-2017-09-15">¶</a><a href="javascript:void(0)" id="3-5-4-2017-09-15" class="anchor-point"></a>3.5.4 (2017-09-15)</h3>\n<ul>\n<li>\n<p><code>Swiper</code>：</p>\n<ul>\n<li>🦀️ Fix UI issue when there\'s only one slide</li>\n<li>📚 Add instance API in documentaion</li>\n</ul>\n</li>\n<li>🦀️ Fix select-all not working in cross page mode in <code>Table</code></li>\n<li>🦀️ Revert <code>Select</code>\'s width style</li>\n<li>🦀️ Fix <code>beforeunload</code> callback leaks in <code>Design</code></li>\n<li>🦀️ Fix Typescript definition for <code>Tabs</code></li>\n<li>📚 Add <a href="contribute">contribute guide</a> in this site</li>\n</ul>\n<h3 class="anchor-heading"><a href="#3-5-3-2017-09-13">¶</a><a href="javascript:void(0)" id="3-5-3-2017-09-13" class="anchor-point"></a>3.5.3 (2017-09-13)</h3>\n<ul>\n<li>🦀️ Fix <code>z-index</code> issue when opening more than two <code>Dialog</code>s</li>\n<li>🦀️ Fix today is not included in the last 7 days in <code>DateRangeQuickPicker</code></li>\n<li>🦀️ Fix tab cannot be selected when <code>activeId</code> is zero in <code>Tabs</code></li>\n<li>🦀️ Fix missing form validation errors if <code>validateOnChange</code> and <code>validateOnBlur</code> are both set to <code>false</code> in <code>Form</code></li>\n<li>\n<p><code>Table</code>:</p>\n<ul>\n<li>🦀️ Fix missing <code>clearfix</code> style</li>\n<li>🦀️ Fix <code>totalItem</code> not respected</li>\n<li>📚 Fix <code>title</code> type description</li>\n</ul>\n</li>\n<li>🦀️ Fix <code>Select</code>\'s height</li>\n</ul>'}))}}]),o}(w.Component));o.default=k}});