webpackJsonp([0],[,function(t,e){},function(t,e,n){n(38);var a=n(0)(n(14),n(70),null,null);t.exports=a.exports},function(t,e,n){n(43);var a=n(0)(n(15),n(75),null,null);t.exports=a.exports},function(t,e,n){n(42);var a=n(0)(n(16),n(74),"data-v-4b1da0fc",null);t.exports=a.exports},function(t,e,n){n(44);var a=n(0)(n(23),n(76),null,null);t.exports=a.exports},function(t,e,n){n(40);var a=n(0)(n(24),n(72),"data-v-463fd9e4",null);t.exports=a.exports},function(t,e,n){n(49);var a=n(0)(n(26),n(81),"data-v-b276e390",null);t.exports=a.exports},function(t,e,n){n(47);var a=n(0)(n(27),n(79),"data-v-7c4b55dc",null);t.exports=a.exports},function(t,e,n){n(34);var a=n(0)(n(28),n(66),"data-v-03a60311",null);t.exports=a.exports},function(t,e,n){n(36);var a=n(0)(n(29),n(68),"data-v-17489c47",null);t.exports=a.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),s=n(2),r=n.n(s),o=n(11),i=n(6),c=n.n(i),l=n(3),u=n.n(l),d=n(5),p=n.n(d),v=n(8),f=n.n(v),m=n(9),h=n.n(m),_=n(7),g=n.n(_),b=n(10),y=n.n(b),C=n(4),w=(n.n(C),n(1));n.n(w);a.a.use(o.a);var x=[{path:"/",component:c.a},{path:"/about",component:u.a},{path:"/contact",component:p.a},{path:"/retail",component:f.a},{path:"/retail/roller-shades",component:h.a},{path:"/retail/awnings",component:g.a},{path:"/retail/shutters",component:y.a}],P=new o.a({routes:x,mode:"history"});new a.a({el:"#app",template:"<App/>",components:{App:r.a},router:P}).$mount("#app")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(60),s=n.n(a),r=n(59),o=n.n(r);e.default={name:"app",components:{"ps-footer":o.a,"ps-navbar":s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),s=n.n(a),r=n(56),o=n.n(r);e.default={name:"business-lander",components:{BusinessProductCarousel:s.a,BusinessProductLanderTopDescription:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"business-product-carousel"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"business-product-lander-top-description"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"collection-item",props:["productTitle","productDesc","productFeature1","productFeature2","productFeature3","productFeature4","productFeature5"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"collection-lede",props:["collectionTitle"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"site-footer"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ps-navbar",computed:{retailRoute:function(){return this.$route.path.split("/")[1].includes("retail")},businessRoute:function(){return this.$route.path.split("/")[1].includes("business")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(61),s=n.n(a);e.default={name:"home",data:function(){return{msg:"Welcome to Polar Shades"}},components:{SiteDivideContainer:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"site-divide-container",props:["title"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(62),s=n.n(a),r=n(57),o=n.n(r),i=n(58),c=n.n(i),l=n(52),u=n.n(l),d=n(53),p=n.n(d);e.default={name:"awnings",components:{awningCta:s.a,CollectionItem:o.a,CollectionLede:c.a},data:function(){return{image1:u.a,image2:p.a}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(63),s=n.n(a),r=n(64),o=n.n(r);e.default={name:"retail-lander",components:{RetailProductCarousel:s.a,RetailProductLanderTopDescription:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"roller-shades",components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"shutters",components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"awning-cta"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"retail-product-carousel"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"retail-product-lander-top-description",props:["sectionTitle"]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"static/img/awning7.c59ec36.jpg"},function(t,e,n){t.exports=n.p+"static/img/awning8.d04c3f3.jpg"},function(t,e,n){t.exports=n.p+"static/img/ps_logo_site.08c7de7.png"},function(t,e,n){n(39);var a=n(0)(n(17),n(71),"data-v-447d539a",null);t.exports=a.exports},function(t,e,n){n(50);var a=n(0)(n(18),n(82),"data-v-baf9a5ce",null);t.exports=a.exports},function(t,e,n){n(51);var a=n(0)(n(19),n(83),"data-v-c41aea6c",null);t.exports=a.exports},function(t,e,n){n(48);var a=n(0)(n(20),n(80),"data-v-8c19f81e",null);t.exports=a.exports},function(t,e,n){n(45);var a=n(0)(n(21),n(77),"data-v-62e553bb",null);t.exports=a.exports},function(t,e,n){n(33);var a=n(0)(n(22),n(65),"data-v-019777b0",null);t.exports=a.exports},function(t,e,n){n(46);var a=n(0)(n(25),n(78),"data-v-7827074d",null);t.exports=a.exports},function(t,e,n){n(37);var a=n(0)(n(30),n(69),"data-v-1fe67e24",null);t.exports=a.exports},function(t,e,n){n(41);var a=n(0)(n(31),n(73),"data-v-46fea3d8",null);t.exports=a.exports},function(t,e,n){n(35);var a=n(0)(n(32),n(67),"data-v-08c0a093",null);t.exports=a.exports},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default",attrs:{id:"ps-nav"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{attrs:{src:n(54)}})])],1),t._v(" "),a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("Why Polar Shades?")])],1),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:!t.retailRoute,expression:"!retailRoute"}]},[a("router-link",{attrs:{to:"/retail"}},[t._v("Retail")])],1),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.retailRoute,expression:"retailRoute"}]},[a("router-link",{attrs:{to:"/retail/awnings"}},[t._v("Awnings")])],1),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.retailRoute,expression:"retailRoute"}]},[a("router-link",{attrs:{to:"/retail/roller-shades"}},[t._v("Roller Shades")])],1),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.retailRoute,expression:"retailRoute"}]},[a("router-link",{attrs:{to:"/retail/shutters"}},[t._v("Other Solutions")])],1),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:!t.retailRoute,expression:"!retailRoute"}]},[a("a",{attrs:{href:"//www.polarshade.com"}},[t._v("Business")])])]),t._v(" "),a("div",{staticClass:"pull-right search-icon-section"},[a("router-link",{attrs:{to:"/contact"}},[a("div",{staticClass:"quoteText"},[t._v("I Want a Quote! "),a("i",{staticClass:"glyphicon glyphicon-pencil"})])])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rollerShadesPage"}},[n("div",{attrs:{id:"rollerShadesLede"}},[t._v("\n    Roller Shades\n  ")]),t._v(" "),n("div",{staticClass:"container",attrs:{id:"rollershades_atf"}},[n("p",[t._v("\n      Take advantage of cutting-edge technology and manage your shades in style. From scores of colors to hundreds of customization options, roller shades are our most ambitious offering.\n    ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"description-container"}},[n("div",{staticClass:"col-xs-12 retail-product-description"},[n("h1",[t._v(t._s(t.sectionTitle))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shuttersPage"}},[n("div",{attrs:{id:"shuttersLede"}},[t._v("\n    Blinds, Shutters"),n("br"),t._v("\n    & Draperies\n  ")]),t._v(" "),n("div",{staticClass:"container",attrs:{id:"shutters_atf"}},[n("p",[t._v("\n      For complete insulation from the sun during those hot summer months, nothing beats full-collapse blinds. With dozens of color and material combinations to choose from, you can have a custom, comfortable experience in no time.\n    ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"awning-cta"}},[n("p",[t._v("\n    Want to see more styles? We have over 50 textures and 20 finishes on display at our office. Schedule a tour of our showroom today!\n  ")]),t._v(" "),n("div",{staticClass:"awning-cta-button-container"},[n("div",{staticClass:"awning-cta-button"},[t._v("Let's Schedule My Visit")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ps-navbar"),t._v(" "),n("router-view"),t._v(" "),n("ps-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"carousel-container"}},[n("div",{staticClass:"col-xs-12 business-product-carousel"},[n("h1",[t._v("Business Product Carousel")]),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"retailIntroContainer"},[n("site-divide-container",{staticClass:"retailIntro",attrs:{title:"Retail"}},[n("router-link",{attrs:{to:"/retail"}},[t._v("Learn more about our custom installations in the Las Vegas valley")])],1)],1),t._v(" "),n("div",{staticClass:"manufacturingIntroContainer"},[n("site-divide-container",{staticClass:"manufacturingIntro",attrs:{title:"Manufacturing"}},[n("router-link",{attrs:{to:"/business"}},[t._v("Explore our business and manufacturing offerings")])],1)],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"carousel-container"}},[n("div",{staticClass:"col-xs-12 retail-product-carousel"},[n("h1",[t._v("Explore our Work")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("business-product-carousel",[n("router-link",{attrs:{to:"/business/products"}},[t._v("Click to view more in this category")])],1),t._v(" "),n("business-product-lander-top-description"),t._v(" "),n("business-product-lander-top-description"),t._v(" "),n("business-product-lander-top-description")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"aboutPage"}},[n("div",{attrs:{id:"aboutPageLede"}},[t._v("\n    About Us\n  ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"container-fluid"},[n("iframe",{staticStyle:{border:"0"},attrs:{id:"mapAbout",width:"100%",height:"400",frameborder:"0",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyABHI8ueljiYNIibg58zrJKnz9zrp5cq1M&q=520+East+Sunset+Road,Henderson+NV",allowfullscreen:""}})],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"about_atf"}},[n("p",[t._v("\n      Polar Shades Sun Control corporate office and manufacturing division is located in Henderson, Nevada, just 15 minutes from the “Strip” in Las Vegas.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"about_btf"}},[n("p",[t._v("\n      A family owned business started in 1995 by its current owner, Steve Mevius, Polar Shades Sun Control manufactures interior and exterior window covering products. What once was an operation for products installed locally in Las Vegas, has now grown into a major manufacturing company providing their products all over the US, Canada, and Europe. What started as a backyard hobby making solar screens has turned into a passion of creating the best quality products with the best warranty and the best customer service in the industry.\n    ")]),t._v(" "),n("p",[t._v("\n      When Steve started the company, he saw that there was a basic need for sun control that just wasn’t being met in the Las Vegas valley. People were constantly looking for ways to control the excessive heat and glare and a good quality solution was nowhere in sight. Because of this, Steve decided to do his own research on sun control products and set out to find the best quality material available to design products that would allow people to take control of their sun control issues. What he found was that the products he needed didn’t exist or meet his strict expectations. He then began the process of creating, engineering, and drawing the products that would meet his high standards and those of Polar Shades customers. Steve met with aluminum extruders, injection mold, sun control specialty fabrics, and motor control companies so he could realize his dream of quality retractable sun control products.\n    ")]),t._v(" "),n("p",[t._v("\n      In 1995 with everything now in place, Steve took an early retirement package from his employer, American Airlines, and along with his father, Art Mevius, started Polar Shades Sun Control. With just the two of them they set out to offer their new products to the people of Las Vegas. In over 20 years, they now have over 50 employees and have expanded their facility to over 21,000 square feet. Polar Shades invested in computerized fabric cutting tables, RF and Impulse fabric welding machines, and inspection hoists that enable Polar Shades to manufacture the “Best Built, Best Backed” line of interior and exterior shades in the nation. Polar Shades now supplies well over 1,000 independent dealers nationwide, sharing their exclusive products. Steve even started a second company called All Seasons Retractable Screens, a retractable screen door company (now run by Art Mevius) that manufactures and supplies a nationwide dealer network.\n    ")]),t._v(" "),n("p",[t._v("\n      Since its inception, Polar Shades Sun Control has added exterior retractable shades, interior retractable shades, and an electrical division to its product line. The motto for the company, as Steve has always said, is “Quality you can trust with service you can count on!” With that basic phrase he has positioned Polar Shades to be one of the nation’s leaders in Sun Control Products. Honesty and integrity is what our business is based on.\n    ")]),t._v(" "),n("p",[t._v("\n      Whatever your needs are, large or small, Polar Shades Sun Control should be your choice for “Covering everything under the sun”. Please give us a call and our friendly staff will be happy to help you with whatever you need. Come visit our showroom which is open to the public 6 days a week, and see for yourself the “Best Built, Best Backed” shades in the industry.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"mission"}},[n("div",{staticClass:"missionTitle"},[t._v("\n      Our Mission\n    ")]),t._v(" "),n("div",{staticClass:"missionSection"},[n("p",[t._v('\n        "At Polar Shades Sun Control, our commitment to our customers is to provide the finest quality product with the best warranty at the very best price.\n      ')]),t._v(" "),n("p",[t._v("\n        We deliver superior customer service second to none, with 'Honesty and Integrity' - the principles our company is founded on.\"\n      ")]),t._v(" "),n("div",{staticClass:"signature"},[t._v("\n        Steve Mevius, President"),n("br"),t._v("\n        Polar Shades, Inc.\n      ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contactUsPage"}},[n("div",{attrs:{id:"contactPageLede"}},[t._v("\n      Get in Touch\n    ")]),t._v(" "),n("div",{staticClass:"container",attrs:{id:"contact"}},[n("p",[t._v("\n        Need a quote? You've come to the right place. From general questions to dimension or style breakdowns, we're here to help. Please provide your information below and a talented member of our staff will get back to you as quickly as possible!\n      ")])]),t._v(" "),n("div",{staticClass:"container-fluid form-container"},[n("form",{staticClass:"form-horizontal",attrs:{action:" ",method:"post",id:"contact_form"}},[n("fieldset",[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("First Name")]),t._v(" "),n("div",{staticClass:"inputGroupContainer"},[n("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[n("input",{staticClass:"form-control",attrs:{name:"first_name",placeholder:"First Name",type:"text"}})])])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Last Name")]),t._v(" "),n("div",{staticClass:"inputGroupContainer"},[n("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[n("input",{staticClass:"form-control",attrs:{name:"last_name",placeholder:"Last Name",type:"text"}})])])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"inputGroupContainer"},[n("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[n("input",{staticClass:"form-control",attrs:{name:"email",placeholder:"E-Mail Address",type:"text"}})])])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Phone")]),t._v(" "),n("div",{staticClass:"inputGroupContainer"},[n("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[n("input",{staticClass:"form-control",attrs:{name:"phone",placeholder:"(845)555-1212",type:"text"}})])])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Description")]),t._v(" "),n("div",{staticClass:"inputGroupContainer"},[n("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[n("textarea",{staticClass:"form-control",attrs:{name:"comment",placeholder:"Project Description"}})])])]),t._v(" "),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-md-10"},[n("button",{staticClass:"pull-right btn",attrs:{type:"submit"}},[t._v("Send "),n("span",{staticClass:"glyphicon glyphicon-send"})])])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"ps-footer"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"pull-right footer-text"},[t._v("\n        Copyright 2017 Polar Shades. All Rights Reserved.\n      ")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-12 col-md-6 site-divide-container"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("retail-product-carousel"),t._v(" "),n("retail-product-lander-top-description",{attrs:{sectionTitle:"Draperies & Blinds"}}),t._v(" "),n("retail-product-lander-top-description",{attrs:{sectionTitle:"Awnings"}}),t._v(" "),n("retail-product-lander-top-description",{attrs:{sectionTitle:"Roller Shades"}}),t._v(" "),n("retail-product-lander-top-description",{attrs:{sectionTitle:"Shutters"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection-bg"},[n("h2",[t._v(t._s(t.collectionTitle))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"awningsPage"}},[n("div",{attrs:{id:"awningsLede"}},[t._v("\n    Awnings\n  ")]),t._v(" "),t._m(0),t._v(" "),n("collection-lede",{attrs:{id:"awningCollection",collectionTitle:"Our Collection"}}),t._v(" "),n("collection-item",{attrs:{productTitle:"G150",productDesc:"With a commercial-grade frame and wrapped front bar, the G150 is one of our most durable luxury awning solutions. Additional features include drop forge components and a Somfy Sunea CMO motor.",productFeature1:"Powder-coated frame in several styles",productFeature2:"Welded acrylic seams for increased strength and performance",productFeature3:"Optional drop screen for added seclusion",productFeature4:"Patented articulating shoulders for advanced manueverability"}},[n("img",{staticClass:"img img-responsive",attrs:{src:t.image1}})]),t._v(" "),n("collection-item",{attrs:{productTitle:"7700",productDesc:"The 7700 series retractable patio awnings are a cost-effective quality product with all aluminum construction.",productFeature1:"Powder-coated frame in several styles",productFeature2:"Welded acrylic seams for increased strength and performance",productFeature3:"Optional drop screen for added seclusion",productFeature4:"7-Pin adjustable shoulder",productFeature5:"6 valence styles"}},[n("img",{staticClass:"img img-responsive",attrs:{src:t.image2}})]),t._v(" "),n("awningCta")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"awnings_atf"}},[n("p",[t._v("\n      Maintaining a cool space is more than window covering - creating a shaded environment is also essential. Employ efficient solutions to reduce your energy bill by up to 40 percent - in style all the while.\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"description-container"}},[n("div",{staticClass:"col-xs-12 business-product-description"},[n("h1",[t._v("Business Product Description")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container product-img-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-md-6"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"col-xs-12 col-md-6 flex-container"},[n("h3",[t._v(t._s(t.productTitle))]),t._v(" "),n("p",[t._v(t._s(t.productDesc))]),t._v(" "),n("div",{staticClass:"keyFeaturesLede"},[t._v("Key Features")]),t._v(" "),n("ul",{staticClass:"productFeaturesList"},[t.productFeature1?n("li",[t._v(t._s(t.productFeature1))]):t._e(),t._v(" "),t.productFeature2?n("li",[t._v(t._s(t.productFeature2))]):t._e(),t._v(" "),t.productFeature3?n("li",[t._v(t._s(t.productFeature3))]):t._e(),t._v(" "),t.productFeature4?n("li",[t._v(t._s(t.productFeature4))]):t._e(),t._v(" "),t.productFeature5?n("li",[t._v(t._s(t.productFeature5))]):t._e()])])])])},staticRenderFns:[]}}],[13]);
//# sourceMappingURL=app.b1033307aa26b6158220.js.map