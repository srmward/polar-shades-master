webpackJsonp([0],[,function(t,e,a){a(56);var o=a(0)(a(21),a(96),"data-v-c41aea6c",null);t.exports=o.exports},function(t,e,a){a(53);var o=a(0)(a(22),a(93),"data-v-8c19f81e",null);t.exports=o.exports},function(t,e){},function(t,e,a){a(41);var o=a(0)(a(16),a(81),null,null);t.exports=o.exports},function(t,e,a){a(46);var o=a(0)(a(17),a(86),null,null);t.exports=o.exports},function(t,e,a){a(45);var o=a(0)(a(18),a(85),"data-v-4b1da0fc",null);t.exports=o.exports},function(t,e,a){a(47);var o=a(0)(a(25),a(87),null,null);t.exports=o.exports},function(t,e,a){a(43);var o=a(0)(a(26),a(83),"data-v-463fd9e4",null);t.exports=o.exports},function(t,e,a){a(54);var o=a(0)(a(28),a(94),"data-v-b276e390",null);t.exports=o.exports},function(t,e,a){a(50);var o=a(0)(a(29),a(90),"data-v-7c4b55dc",null);t.exports=o.exports},function(t,e,a){a(38);var o=a(0)(a(30),a(78),"data-v-03a60311",null);t.exports=o.exports},function(t,e,a){a(52);var o=a(0)(a(31),a(92),"data-v-8849fb6e",null);t.exports=o.exports},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(14),n=a(4),r=a.n(n),s=a(13),i=a(8),c=a.n(i),l=a(5),d=a.n(l),u=a(7),p=a.n(u),f=a(10),v=a.n(f),h=a(11),m=a.n(h),_=a(9),g=a.n(_),b=a(12),w=a.n(b),C=a(6),y=(a.n(C),a(3));a.n(y);o.a.use(s.a);var x=[{path:"/",component:c.a},{path:"/about",component:d.a},{path:"/contact",component:p.a},{path:"/retail",component:v.a},{path:"/retail/roller-shades",component:m.a},{path:"/retail/awnings",component:g.a},{path:"/retail/other-solutions",component:w.a}],S=new s.a({routes:x,mode:"history"});new o.a({el:"#app",template:"<App/>",components:{App:r.a},router:S}).$mount("#app")},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(70),n=a.n(o),r=a(69),s=a.n(r);e.default={name:"app",components:{"ps-footer":s.a,"ps-navbar":n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(67),n=a.n(o),r=a(68),s=a.n(r);e.default={name:"business-lander",components:{BusinessProductCarousel:n.a,BusinessProductLanderTopDescription:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"business-product-carousel"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"business-product-lander-top-description"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"collection-item",props:["productTitle","productDesc","productFeature1","productFeature2","productFeature3","productFeature4","productFeature5"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"collection-lede",props:["collectionTitle"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"site-footer"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ps-navbar",computed:{retailRoute:function(){return this.$route.path.split("/")[1].includes("retail")},businessRoute:function(){return this.$route.path.split("/")[1].includes("business")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(71),n=a.n(o);e.default={name:"home",data:function(){return{msg:"Welcome to Polar Shades"}},components:{SiteDivideContainer:n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"site-divide-container",props:["title"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(72),n=a.n(o),r=a(1),s=a.n(r),i=a(2),c=a.n(i),l=a(58),d=a.n(l),u=a(59),p=a.n(u);e.default={name:"awnings",components:{awningCta:n.a,CollectionItem:s.a,CollectionLede:c.a},data:function(){return{image1:d.a,image2:p.a}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(74),n=a.n(o),r=a(75),s=a.n(r);e.default={name:"retail-lander",components:{RetailProductCarousel:n.a,RetailProductLanderTopDescription:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(76),n=a.n(o),r=a(2),s=a.n(r),i=a(1),c=a.n(i),l=a(60),d=a.n(l),u=a(63),p=a.n(u),f=a(64),v=a.n(f),h=a(62),m=a.n(h),_=a(66),g=a.n(_);e.default={name:"roller-shades",components:{rollerCta:n.a,CollectionLede:s.a,CollectionItem:c.a},data:function(){return{image1:d.a,image2:p.a,image3:v.a,image4:m.a,image5:g.a}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(73),n=a.n(o),r=a(2),s=a.n(r),i=a(1),c=a.n(i);e.default={name:"solutions",components:{partnersCTA:n.a,CollectionLede:s.a,CollectionItem:c.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"awning-cta"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"partners-cta"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"retail-product-carousel"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"retail-product-lander-top-description",props:["sectionTitle"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"roller-cta"}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){t.exports=a.p+"static/img/awning7.c59ec36.jpg"},function(t,e,a){t.exports=a.p+"static/img/awning8.d04c3f3.jpg"},function(t,e,a){t.exports=a.p+"static/img/exterior_shade5.4274067.jpg"},function(t,e,a){t.exports=a.p+"static/img/factory_team.8241a98.jpg"},function(t,e,a){t.exports=a.p+"static/img/interior_duoshade.8ef3bf1.jpg"},function(t,e,a){t.exports=a.p+"static/img/interior_manual.4462c03.jpg"},function(t,e,a){t.exports=a.p+"static/img/interior_shade8.05d0f2d.jpg"},function(t,e,a){t.exports=a.p+"static/img/ps_logo_site.08c7de7.png"},function(t,e,a){t.exports=a.p+"static/img/titan_shade.e6c31a3.jpg"},function(t,e,a){a(42);var o=a(0)(a(19),a(82),"data-v-447d539a",null);t.exports=o.exports},function(t,e,a){a(55);var o=a(0)(a(20),a(95),"data-v-baf9a5ce",null);t.exports=o.exports},function(t,e,a){a(48);var o=a(0)(a(23),a(88),"data-v-62e553bb",null);t.exports=o.exports},function(t,e,a){a(37);var o=a(0)(a(24),a(77),"data-v-019777b0",null);t.exports=o.exports},function(t,e,a){a(49);var o=a(0)(a(27),a(89),"data-v-7827074d",null);t.exports=o.exports},function(t,e,a){a(40);var o=a(0)(a(32),a(80),"data-v-1fe67e24",null);t.exports=o.exports},function(t,e,a){a(57);var o=a(0)(a(33),a(97),"data-v-d593e1e6",null);t.exports=o.exports},function(t,e,a){a(44);var o=a(0)(a(34),a(84),"data-v-46fea3d8",null);t.exports=o.exports},function(t,e,a){a(39);var o=a(0)(a(35),a(79),"data-v-08c0a093",null);t.exports=o.exports},function(t,e,a){a(51);var o=a(0)(a(36),a(91),"data-v-7c8af8ee",null);t.exports=o.exports},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navbar navbar-default",attrs:{id:"ps-nav"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"navbar-header"},[o("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[o("img",{attrs:{src:a(65)}})])],1),t._v(" "),o("ul",{staticClass:"nav navbar-nav"},[o("li",[o("router-link",{attrs:{to:"/about"}},[t._v("Why Polar Shades?")])],1),t._v(" "),o("li",{directives:[{name:"show",rawName:"v-show",value:!t.retailRoute,expression:"!retailRoute"}]},[o("router-link",{attrs:{to:"/retail"}},[t._v("Retail")])],1),t._v(" "),o("li",{directives:[{name:"show",rawName:"v-show",value:t.retailRoute,expression:"retailRoute"}]},[o("router-link",{attrs:{to:"/retail/awnings"}},[t._v("Awnings")])],1),t._v(" "),o("li",{directives:[{name:"show",rawName:"v-show",value:t.retailRoute,expression:"retailRoute"}]},[o("router-link",{attrs:{to:"/retail/roller-shades"}},[t._v("Roller Shades")])],1),t._v(" "),o("li",{directives:[{name:"show",rawName:"v-show",value:t.retailRoute,expression:"retailRoute"}]},[o("router-link",{attrs:{to:"/retail/other-solutions"}},[t._v("Other Solutions")])],1),t._v(" "),o("li",{directives:[{name:"show",rawName:"v-show",value:!t.retailRoute,expression:"!retailRoute"}]},[o("a",{attrs:{href:"//www.polarshade.com"}},[t._v("Business")])])]),t._v(" "),o("div",{staticClass:"pull-right search-icon-section"},[o("router-link",{attrs:{to:"/contact"}},[o("div",{staticClass:"quoteText"},[t._v("I Want a Quote! "),o("i",{staticClass:"glyphicon glyphicon-pencil"})])])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"rollerShadesPage"}},[a("div",{attrs:{id:"rollerShadesLede"}},[t._v("\n    Roller Shades\n  ")]),t._v(" "),t._m(0),t._v(" "),a("collection-lede",{attrs:{id:"rsIntCollection",collectionTitle:"Interior Shades"}}),t._v(" "),a("collection-item",{attrs:{productTitle:"Motorized Interior Shade",productDesc:"Technology for residential, commercial, hospitality and healthcare window applications is constantly progressing. Movements that seem natural to us, such as closing a blind manually, are today considered out dated. Polar Shades is a leader in window covering motorization and automation options. By coordinating motors and electronic controls, Polar Shades provides its customers with a choice of reliable and practical solutions.",productFeature1:"Available in width of 28″ up to 168″ measured bracket to bracket with coupled shade applications and angled couplers for single motor operation of larger expanses.",productFeature2:"Available in drops of 12″ up to 192″ with total drop measured from top of bracket to bottom of hem bar",productFeature3:"Black out track and 4″ or 5″ fascia in standard colors: white, tan, black, bronze or anodized aluminum",productFeature4:"Powder-coated steel brackets available in standard colors: white, tan, black, bronze or anodized aluminum",productFeature5:"Welded (not sewn) fabric seams in horizontal application for solar fabrics and either horizontal or vertical application for acrylic fabrics"}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.image2}})]),t._v(" "),a("collection-item",{attrs:{productTitle:"Manual Interior Shade",productDesc:"Interior Manual Shades are designed with a clutch system that is operated by pulling a continuous loop bead chain to effortlessly open and close the shade. Simply pull down on one side of the chain to raise the shade and pull down on the opposite side of the chain to lower the shade. Polar Shades’ multiple clutch sizes ensure that any size shade can be lifted with minimal effort. Interior manual shades are available with an optional 3 inch or 4 inch fascia in 5 standard colors as well as custom colors at an up charge. A curved cassette box that can be fabric wrapped for a softer look provides a beautiful designer look.",productFeature1:"Available in widths of 24″ to 144″, measured from end of bracket to end of bracket",productFeature2:"Available in drops up to 120″, measured from top of the bracket to bottom of the weight bar",productFeature3:"Fabric wrapped fascia or fabric wrapped curved cassette box options",productFeature4:"Spring assist option for easier to lift large shades",productFeature5:"Powder-coated steel brackets available in white, tan, bronze, black & anodized"}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.image3}})]),t._v(" "),a("collection-item",{attrs:{productTitle:"Duo Shade",productDesc:"Our Duo Shade provides the highest level of functionality enabling the mounting of a sheer or sun control shade and a privacy or black out shade all in one single housing with optimal operation via remote control or wireless wall switch. The Duo Shade is mounted on uniquely designed brackets which hold two shades while giving the appearance of one mounted shade. ",productFeature1:"Select Duo Shade is a dual-roller shade system; One roller tube holds a blackout fabric for room darkening for instance, while the other holds an open weave fabric. The roller tube with black out fabric can be combined with black out tracks for a darker effect.",productFeature2:"Drops are available from 12″ to 120″ with the total drop measured from the top of the bracket to the bottom of the hem bar",productFeature3:"Brackets are powder-coated steel and available in standard colors: anodized, white, tan, and bronze",productFeature4:"Available with black out track and 7″ fascia in standard colors: anodized, white, tan, and bronze",productFeature5:"Limited Lifetime Warranty"}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.image4}})]),t._v(" "),a("collection-lede",{attrs:{id:"rsExtCollection",collectionTitle:"Exterior Shades"}}),t._v(" "),a("collection-item",{attrs:{productTitle:"Elite Patio Roll Shade",productDesc:"Polar Shades’ Elite Patio Roll Shade is offered with a 4.5″ Elite Cassette, a curved Freedom Hood or as a standard open roll configuration. The Elite Patio Roll Shade is available in a motorized or manual configuration. Its sleek design will cover spans up to 14 feet in width and heights up to 12 feet in length.",productFeature1:"Wind, Sun sensor options available",productFeature2:"Interior wall mount and remote controls",productFeature3:"Track guided",productFeature4:"Welded fabric edges",productFeature5:"Soffit Mount Brackets"}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.image1}})]),t._v(" "),a("collection-item",{attrs:{productTitle:"Titan Patio Roll Shade",productDesc:"Polar Shades’ Exterior Select Patio Roll Shade is offered with a 5.5″ Titan Cassette, a curved Patriot Hood or as a standard open roll configuration. The Patio Roll Shade is available in a motorized or manual configuration with a sleek design that covers spans up to 20 feet in width and heights up to 16 feet in length.",productFeature1:"Wind, Sun sensor options available",productFeature2:"Interior wall mount and remote controls",productFeature3:"Home automation integration",productFeature4:"Welded fabric edges",productFeature5:"Manual with Crank or Motorized"}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.image5}})]),t._v(" "),a("rollerCta")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"rollershades_atf"}},[a("p",[t._v("\n      Take advantage of cutting-edge technology and manage your shades in style. From scores of colors to hundreds of customization options, roller shades are our most ambitious offering.\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"description-container"}},[a("div",{staticClass:"col-xs-12 retail-product-description"},[a("h1",[t._v(t._s(t.sectionTitle))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"awning-cta"}},[a("p",[t._v("\n    Want to see more styles? We have over 50 textures and 20 finishes on display at our office. Schedule a tour of our showroom today!\n  ")]),t._v(" "),a("div",{staticClass:"awning-cta-button-container"},[a("router-link",{staticClass:"contact-link",attrs:{to:"/contact"}},[a("div",{staticClass:"awning-cta-button"},[t._v("Let's Schedule My Visit")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("ps-navbar"),t._v(" "),a("router-view"),t._v(" "),a("ps-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"carousel-container"}},[a("div",{staticClass:"col-xs-12 business-product-carousel"},[a("h1",[t._v("Business Product Carousel")]),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"retailIntroContainer"},[a("site-divide-container",{staticClass:"retailIntro",attrs:{title:"Retail"}},[a("router-link",{attrs:{to:"/retail"}},[t._v("Learn more about our custom installations in the Las Vegas valley")])],1)],1),t._v(" "),a("div",{staticClass:"manufacturingIntroContainer"},[a("site-divide-container",{staticClass:"manufacturingIntro",attrs:{title:"Manufacturing"}},[a("router-link",{attrs:{to:"/business"}},[t._v("Explore our business and manufacturing offerings")])],1)],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"carousel-container"}},[a("div",{staticClass:"col-xs-12 retail-product-carousel"},[a("h1",[t._v("Explore our Work")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("business-product-carousel",[a("router-link",{attrs:{to:"/business/products"}},[t._v("Click to view more in this category")])],1),t._v(" "),a("business-product-lander-top-description"),t._v(" "),a("business-product-lander-top-description"),t._v(" "),a("business-product-lander-top-description")],1)},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"aboutPage"}},[a("div",{attrs:{id:"aboutPageLede"}},[t._v("\n    About Us\n  ")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"container-fluid"},[a("iframe",{staticStyle:{border:"0"},attrs:{id:"mapAbout",width:"100%",height:"400",frameborder:"0",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyABHI8ueljiYNIibg58zrJKnz9zrp5cq1M&q=520+East+Sunset+Road,Henderson+NV",allowfullscreen:""}})],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"about_atf"}},[a("p",[t._v("\n      Polar Shades Sun Control corporate office and manufacturing division is located in Henderson, Nevada, just 15 minutes from the “Strip” in Las Vegas. A family owned business started in 1995 by its current owner, Steve Mevius, Polar Shades Sun Control manufactures interior and exterior window covering products.\n    ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"about_btf"}},[o("p",[t._v("\n      What once was an operation for products installed locally in Las Vegas, has now grown into a major manufacturing company providing their products all over the US, Canada, and Europe. What started as a backyard hobby making solar screens has turned into a passion of creating the best quality products with the best warranty and the best customer service in the industry.\n    ")]),t._v(" "),o("p",[t._v("\n      When Steve started the company, he saw that there was a basic need for sun control that just wasn’t being met in the Las Vegas valley. People were constantly looking for ways to control the excessive heat and glare and a good quality solution was nowhere in sight. Because of this, Steve decided to do his own research on sun control products and set out to find the best quality material available to design products that would allow people to take control of their sun control issues. What he found was that the products he needed didn’t exist or meet his strict expectations. He then began the process of creating, engineering, and drawing the products that would meet his high standards and those of Polar Shades customers. Steve met with aluminum extruders, injection mold, sun control specialty fabrics, and motor control companies so he could realize his dream of quality retractable sun control products.\n    ")]),t._v(" "),o("div",{staticClass:"col-xs-12"},[o("img",{staticClass:"img factory-img img-responsive",attrs:{src:a(61)}}),t._v(" "),o("div",{staticClass:"caption text-center"},[t._v("\n        A Polar Shade engineer inspecting an interior shade in the Las Vegas factory\n      ")])]),t._v(" "),o("p",[t._v("\n      In 1995 with everything now in place, Steve took an early retirement package from his employer, American Airlines, and along with his father, Art Mevius, started Polar Shades Sun Control. With just the two of them they set out to offer their new products to the people of Las Vegas. In over 20 years, they now have over 50 employees and have expanded their facility to over 21,000 square feet. Polar Shades invested in computerized fabric cutting tables, RF and Impulse fabric welding machines, and inspection hoists that enable Polar Shades to manufacture the “Best Built, Best Backed” line of interior and exterior shades in the nation. Polar Shades now supplies well over 1,000 independent dealers nationwide, sharing their exclusive products. Steve even started a second company called All Seasons Retractable Screens, a retractable screen door company (now run by Art Mevius) that manufactures and supplies a nationwide dealer network.\n    ")]),t._v(" "),o("p",[t._v("\n      Since its inception, Polar Shades Sun Control has added exterior retractable shades, interior retractable shades, and an electrical division to its product line. The motto for the company, as Steve has always said, is “Quality you can trust with service you can count on!” With that basic phrase he has positioned Polar Shades to be one of the nation’s leaders in Sun Control Products. Honesty and integrity is what our business is based on.\n    ")]),t._v(" "),o("p",[t._v("\n      Whatever your needs are, large or small, Polar Shades Sun Control should be your choice for “Covering everything under the sun”. Please give us a call and our friendly staff will be happy to help you with whatever you need. Come visit our showroom which is open to the public 6 days a week, and see for yourself the “Best Built, Best Backed” shades in the industry.\n    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"mission"}},[a("div",{staticClass:"missionTitle"},[t._v("\n      Our Mission\n    ")]),t._v(" "),a("div",{staticClass:"missionSection"},[a("p",[t._v('\n        "At Polar Shades Sun Control, our commitment to our customers is to provide the finest quality product with the best warranty at the very best price.\n      ')]),t._v(" "),a("p",[t._v("\n        We deliver superior customer service second to none, with 'Honesty and Integrity' - the principles our company is founded on.\"\n      ")]),t._v(" "),a("div",{staticClass:"signature"},[t._v("\n        Steve Mevius, President"),a("br"),t._v("\n        Polar Shades, Inc.\n      ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contactUsPage"}},[a("div",{attrs:{id:"contactPageLede"}},[t._v("\n      Get in Touch\n    ")]),t._v(" "),a("div",{staticClass:"container",attrs:{id:"contact"}},[a("p",[t._v("\n        Need a quote? You've come to the right place. From general questions to dimension or style breakdowns, we're here to help. Please provide your information below and a talented member of our staff will get back to you as quickly as possible!\n      ")])]),t._v(" "),a("div",{staticClass:"container-fluid form-container"},[a("form",{staticClass:"form-horizontal",attrs:{action:" ",method:"post",id:"contact_form"}},[a("fieldset",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("First Name")]),t._v(" "),a("div",{staticClass:"inputGroupContainer"},[a("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[a("input",{staticClass:"form-control",attrs:{name:"first_name",placeholder:"First Name",type:"text"}})])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Last Name")]),t._v(" "),a("div",{staticClass:"inputGroupContainer"},[a("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[a("input",{staticClass:"form-control",attrs:{name:"last_name",placeholder:"Last Name",type:"text"}})])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Email")]),t._v(" "),a("div",{staticClass:"inputGroupContainer"},[a("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[a("input",{staticClass:"form-control",attrs:{name:"email",placeholder:"E-Mail Address",type:"text"}})])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Phone")]),t._v(" "),a("div",{staticClass:"inputGroupContainer"},[a("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[a("input",{staticClass:"form-control",attrs:{name:"phone",placeholder:"(845)555-1212",type:"text"}})])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label col-md-6 col-md-offset-3"},[t._v("Description")]),t._v(" "),a("div",{staticClass:"inputGroupContainer"},[a("div",{staticClass:"input-group col-md-6 col-md-offset-3"},[a("textarea",{staticClass:"form-control",attrs:{name:"comment",placeholder:"Project Description"}})])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-md-10"},[a("button",{staticClass:"pull-right btn",attrs:{type:"submit"}},[t._v("Send "),a("span",{staticClass:"glyphicon glyphicon-send"})])])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"ps-footer"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"pull-right footer-text"},[t._v("\n        Copyright 2017 Polar Shades. All Rights Reserved.\n      ")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-12 col-md-6 site-divide-container"},[a("h1",[t._v(t._s(t.title))]),t._v(" "),a("p",[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("retail-product-carousel"),t._v(" "),a("retail-product-lander-top-description",{attrs:{sectionTitle:"Awnings"}}),t._v(" "),a("retail-product-lander-top-description",{attrs:{sectionTitle:"Roller Shades"}}),t._v(" "),a("retail-product-lander-top-description",{attrs:{sectionTitle:"Other Solutions"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"roller-cta"}},[a("p",[t._v("\n    Stop by our showroom to view live demos of our various motorized and manual offerings.\n  ")]),t._v(" "),a("div",{staticClass:"roller-cta-button-container"},[a("router-link",{staticClass:"contact-link",attrs:{to:"/contact"}},[a("div",{staticClass:"roller-cta-button"},[t._v("Let's Schedule My Visit")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"solutionsPage"}},[a("div",{attrs:{id:"solutionsLede"}},[t._v("\n    Other Solutions\n  ")]),t._v(" "),t._m(0),t._v(" "),a("collection-lede",{attrs:{id:"bsdCollection",collectionTitle:"Blinds, Shutters & Draperies"}}),t._v(" "),a("collection-lede",{attrs:{id:"solutionsCollection",collectionTitle:"Retractable Screen Doors"}}),t._v(" "),a("partnersCTA")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"solutions_atf"}},[a("p",[t._v("\n      For complete insulation from the sun during those hot summer months, nothing beats full-collapse blinds. With dozens of color and material combinations to choose from, you can have a custom, comfortable experience in no time.\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collection-bg"},[a("h2",[t._v(t._s(t.collectionTitle))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"awningsPage"}},[a("div",{attrs:{id:"awningsLede"}},[t._v("\n    Awnings\n  ")]),t._v(" "),t._m(0),t._v(" "),a("collection-lede",{attrs:{id:"awningCollection",collectionTitle:"Our Collection"}}),t._v(" "),a("collection-item",{attrs:{productTitle:"G150",productDesc:"With a commercial-grade frame and wrapped front bar, the G150 is one of our most durable luxury awning solutions. Additional features include drop forge components and a Somfy Sunea CMO motor.",productFeature1:"Powder-coated frame in several styles",productFeature2:"Welded acrylic seams for increased strength and performance",productFeature3:"Optional drop screen for added seclusion",productFeature4:"Patented articulating shoulders for advanced manueverability"}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.image1}})]),t._v(" "),a("collection-item",{attrs:{productTitle:"7700",productDesc:"The 7700 series retractable patio awnings are a cost-effective quality product with all aluminum construction.",productFeature1:"Powder-coated frame in several styles",productFeature2:"Welded acrylic seams for increased strength and performance",productFeature3:"Optional drop screen for added seclusion",productFeature4:"7-Pin adjustable shoulder",productFeature5:"6 valence styles"}},[a("img",{staticClass:"img img-responsive",attrs:{src:t.image2}})]),t._v(" "),a("awningCta")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"awnings_atf"}},[a("p",[t._v("\n      Maintaining a cool space is more than window covering - creating a shaded environment is also essential. Employ efficient solutions to reduce your energy bill by up to 40 percent - in style all the while.\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"description-container"}},[a("div",{staticClass:"col-xs-12 business-product-description"},[a("h1",[t._v("Business Product Description")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container product-img-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-md-6"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"col-xs-12 col-md-6 flex-container"},[a("h3",[t._v(t._s(t.productTitle))]),t._v(" "),a("p",[t._v(t._s(t.productDesc))]),t._v(" "),a("div",{staticClass:"keyFeaturesLede"},[t._v("Key Features")]),t._v(" "),a("ul",{staticClass:"productFeaturesList"},[t.productFeature1?a("li",[t._v(t._s(t.productFeature1))]):t._e(),t._v(" "),t.productFeature2?a("li",[t._v(t._s(t.productFeature2))]):t._e(),t._v(" "),t.productFeature3?a("li",[t._v(t._s(t.productFeature3))]):t._e(),t._v(" "),t.productFeature4?a("li",[t._v(t._s(t.productFeature4))]):t._e(),t._v(" "),t.productFeature5?a("li",[t._v(t._s(t.productFeature5))]):t._e()])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"partners-cta"}},[a("p",[t._v("\n    Check out our partners who rock!\n  ")])])}]}}],[15]);
//# sourceMappingURL=app.a27b76700991fd3d097a.js.map