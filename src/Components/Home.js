import React from 'react'
import Footer from './Footer'
import wordpresstheme from './Themedata'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="themeCard">
        <div className="container-xl">
          <div className="row">
            <h3 className="double_cirlcle">
              Best Premium WordPress Themes Providers 2021
            </h3>
            <div className="row">
              <div className="col-md-6 col-lg-3 col-6 mt-5">
                <div className="cards shadow p-2 py-3 rounded text-center">
                  <img
                    src={require('../Components/img/the.png').default}
                    alt=""
                    className="img-fluid"
                  />
                  <Link to="#" className="text-center ">
                    ThemeForest
                  </Link>
                  <p className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                  <div className="thetext">
                    <h5 className="text-left">
                      51,345 WordPress Themes & Website Templates From $2
                    </h5>
                    <p className="text-left">
                      WordPress themes, web templates and more. Brought to you
                      by the largest global community of creatives.
                    </p>
                  </div>
                  <button className=" text-light py-2 px-4 border-0">
                    Visit ThemeForest
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-6 mt-5">
                <div className="cards shadow p-2 py-3 rounded text-center">
                  <img
                    src={require('../Components/img/thrive-themes.png').default}
                    alt=""
                    className="img-fluid"
                  />
                  <Link to="#" className="text-center">
                    ThriveThemes
                  </Link>
                  <p className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                  <div className="thetext">
                    <h5 className="text-left">
                      The Full Suite of Thrive Themes Plugins & Build Beautiful
                      Websites & Landing Pages.
                    </h5>
                    <p className="text-left">
                      Get Free Feature Updates. Premium Templates. Friendly
                      Support Team.
                    </p>
                  </div>
                  <button className=" text-light py-2 px-4 border-0">
                    Visit ThemeForest
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3  col-6 mt-5">
                <div className="cards shadow p-2 py-3 rounded text-center">
                  <img
                    src={require('../Components/img/elegantthemes.png').default}
                    alt=""
                    className="img-fluid"
                  />
                  <Link to="#" className="text-center">
                    Elegant Themes
                  </Link>
                  <p className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                  <div className="thetext">
                    <h5 className="text-left">
                      The Most Popular WordPress Themes In The World And The
                      Ultimate Visual Page Builder
                    </h5>
                    <p className="text-left">
                      Join 767,154 Empowered Web Design Professionals & Business
                      Owners
                    </p>
                  </div>
                  <button className=" text-light py-2 px-4 border-0">
                    Visit ThemeForest
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3  col-6 mt-5">
                <div className="cards shadow p-2 py-3 rounded text-center">
                  <img
                    src={require('../Components/img/themify.png').default}
                    alt=""
                    className="img-fluid"
                  />
                  <Link to="#" className="text-center">
                    Themify
                  </Link>
                  <p className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </p>
                  <div className="thetext">
                    <h5 className="text-left">
                      Premium WordPress Themes & Plugins
                    </h5>
                    <p className="text-left">
                      Since 2010, 102,245+ customers make beautifully responsive
                      WordPress sites, faster and easier than ever.
                    </p>
                  </div>
                  <button className=" text-light py-2 px-4 border-0">
                    Visit ThemeForest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-2">
        <div className="container-xl">
          <div className="text">
            <h3 className="double_cirlcle mt-4">
              2021’s Best Selling WordPress Themes
            </h3>
          </div>
          <div className="cardbtn mt-5">
            <button className="btn btn-outline-danger m-2">
              Popular Items
            </button>
            <button className="btn btn-outline-danger m-2">
              Blog / magazine
            </button>
            <button className="btn btn-outline-danger m-2">
              Entertainment
            </button>
            <button className="btn btn-outline-danger m-2">Real Estate</button>
            <button className="btn btn-outline-danger m-2">Nonprofit</button>
            <button className="btn btn-outline-danger m-2">Wedding</button>
          </div>
          <div className="wordpressthemes">
            <div className="row mt-4">
              {wordpresstheme.map((cur, ind) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 col-12 mt-3 hoverefect"
                    key={ind}
                  >
                    <div className="card shadow overflow-hidden">
                      <div className="imghover position-relative">
                        <img
                          src={cur.img.default}
                          alt=""
                          className="img-fluid"
                        />
                        <div className="price shadow">
                          <h2>${cur.price}</h2>
                        </div>
                      </div>
                      <div className="Card_text p-2 hoveer">
                        <h3 className="m-0 mt-3">{cur.heading}</h3>
                        <p className="author">
                          by <span>{cur.author}</span>
                        </p>
                        <div className="row mt-5">
                          <div className="col-md-4 col-3">
                            <button className="btn btn-secondary detailsbtn">
                              Details
                            </button>
                          </div>
                          <div className="col-md-8 col-9 text-right position-relative">
                            <button className="btn btn-danger mx-2 downloadbtn">
                              Download
                            </button>
                            <button className="btn btn-info demobtn">
                              Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className="btn btn-danger mt-3 loadbtn">
              Load More...
            </button>
          </div>
        </div>
      </div>

      <div className="wrap-3">
        <div className="container-xl">
          <h2 className="mt-5 font-weight-bold">
            Top WordPress Theme Providers 2021 Is So Famous, But Why?
          </h2>
          <p className="font-weight-900">
            A website is a powerful online marketing tool that you can use to
            promote your business on the internet. A few years ago building a
            website for a small or large company was expensive and distressing.
            However, thanks to free tools like WordPress, creating a corporate
            website is easy and fast today. WordPress has a large number of
            specific themes or templates for companies and corporations that
            will go very well for your business. There are impressive
            custom-made WordPress themes for companies that provide all the
            features and functionalities you may need to promote and manage your
            business online. Picking the correct WordPress template for your
            commercial is not problematic if you know how to search. A corporate
            website is not only a means to present your business online, having
            a contact form will help your clients to contact you, and showing
            information about your location is also essential. Finally, it is a
            good idea to have a flexible design that allows you to redesign your
            website in the future. If you are not sure if any of these fantastic
            WordPress themes are suitable for your web project, we have
            published some other collections of WordPress themes that could
            better fit what you need.
          </p>
          <p className="mt-4">
            <strong>What a good WordPress theme should have</strong>
          </p>
          <ul className="listIcons">
            <li>A modern and aesthetically pleasing design.</li>
            <li>Reliable support.</li>
            <li>Customization options to adapt it to your brand.</li>
            <li>Decent ideas from consumers and developers.</li>
            <li>
              Be responsive so that both mobile and desktop users have a good
              experience.
            </li>
            <li>
              Be SEO-friendly in order to get a lot of traffic and high
              conversion rates.
            </li>
          </ul>
          <h3 className="mt-4">
            Building Your Website With WordPress Themes: Do’s And Don’ts
          </h3>
          <img
            src={require('../Components/img/besttheme.png').default}
            alt=""
            className="img-fluid mt-4"
          />
          <p className="mt-5">
            While developing websites with WordPress, you have option to choose
            from thousands of open source and paid themes. Each WordPress theme
            enables you to design the user interface of the website without
            writing longer lines of code. You can take advantage of the
            front-end styling components – page layout, font styling, graphics,
            colours and widget location – to control the look of your website
            and content presentation across various browsers. But you must
            remember that WordPress has a much larger worldwide market share
            than other content management systems. A single theme may be used by
            a large number of websites. Hence, there are always chances that a
            theme may look your website identical to several other websites. You
            need to focus on a number of do’s and don’ts while selecting and
            using WordPress Themes.
          </p>

          <h3>
            <strong>Do’s</strong>
          </h3>
          <h4 className="mt-3">Do Choose the Right Themes</h4>
          <p className="mt-4">
            In comparison to other content management systems, WordPress
            provided a higher number of free themes. Hence, you can have option
            to choose from many free and paid WordPress themes. But a single
            theme may not meet the requirements of all websites. While comparing
            the themes, you must keep in mind the website’s look and content
            presentation. It is also a great idea to try out multiple themes to
            decide the WordPress theme that complements your website’s needs
            precisely.
          </p>
          <h4 className="mt-3">Do Decide the Key Featuress</h4>
          <p className="mt-4">
            You can easily pick the right theme for your website by defining its
            colours, width, columns, navigation option, and other important
            features. Likewise, you also need to decide the nature and purpose
            of the website. When the theme complements the precise needs of the
            website, it becomes easier for you to avoid customizations and
            modifications. Also, you can add specific functionality to the
            website without using additional plug-ins. However, you can always
            opt for themes that allow you to make changes to its key components
            like layout, width and column spacing through control panel.
          </p>
          <h4 className="mt-3">Do Opt for Simple and Lightweight Themess</h4>
          <p className="mt-4">
            The loading speed of your website will affect its user experience
            and search engine visibility directly. You must not affect the speed
            of your website by choosing WordPress themes that are feature-heavy
            or use large files like background images and videos. Likewise, you
            need to opt for a theme that has been updated on a regular basis to
            enhance website speed based on its high quality source code. You can
            easily check the loading speed of the website with a specific theme
            by using a number of online tools.
          </p>
          <h4 className="mt-3">Do Consider Using Paid Themess</h4>
          <p className="mt-4">
            Many developers opt for free WordPress themes to save money. But you
            can always reap a number of benefits – reliable codebase and
            technical support – by investing in a premium theme. The premium
            themes will further make your website look different without making
            additional customizations. There are also certain premium themes
            that are designed just like web designing tools. You can use such
            themes to create custom page layouts and other components.
          </p>
          <h4 className="mt-3">Do Implement Responsive Web Designs</h4>
          <p className="mt-4">
            While selecting a WordPress theme, you must not forget the fact that
            most people nowadays access websites on their mobile devices. You
            need to implement responsive web design to make the website look
            good on both computers and mobile devices. That is why; it becomes
            essential to opt for a WordPress theme that makes your website
            responsive and mobile-friendly. You can always avoid using mobile
            plug-ins additionally by using a theme that makes your website look
            good on varying devices.
          </p>
          <h4 className="mt-3">Do Explore Options to Customize Themess</h4>
          <p className="mt-4">
            The paid WordPress themes will make it easier for you to make the
            website look and feel different. But you may be required to use free
            themes to curtail project overheads. If you are opting for a free
            theme, it becomes essential to customize it according to your
            specific needs. You can easily make changes to an existing WordPress
            theme if you are proficient in commonly used web technologies like
            HTML, CSS, JavaScript and PHP. Also, you can use a number of tools
            to customize the WordPress theme without rewriting or modifying its
            source code.
          </p>
          <h4 className="mt-3">
            Do Check Compatibility with Browsers and Plug-inss
          </h4>
          <p className="mt-4">
            You must remember that users will access your website on various
            browsers. But there are chances that a single WordPress theme may
            not make your website look good on each browser. Hence, you must
            perform basic browser compatibility test to check how the theme
            looks on major web browsers. Likewise, you also need to check if the
            theme supports all plug-ins required by your website. When the theme
            supports plug-ins required by your website, you can easily add
            functionality to the website through plug-ins.
          </p>

          {/* don't */}

          <h3 className="mt-4">
            <strong>Don’ts</strong>
          </h3>
          <h4 className="mt-3">Don’t Focus on Functionalitys</h4>
          <p className="mt-4">
            Unlike plug-ins, themes are not responsible for the website’s
            functionality. You can use the themes only to make the website
            content look appealing on various devices. There are a number of
            premium themes that come with additional functionalities like search
            engine optimization. But you can easily add functionality to the
            WordPress application by using specific plug-ins. Hence, you must
            opt for themes that support basic WordPress functions.
          </p>
          <h4 className="mt-3">
            Don’t Forget to Evaluate Each Theme Thoroughlys
          </h4>
          <p className="mt-4">
            You have option to choose from a large number of WordPress themes.
            Some of these themes are free, whereas others are premium or paid.
            But the quality of individual themes differs. Hence, you must not
            pick a theme based on the visually arresting photography used by the
            WordPress web developer. It is always important to evaluate each
            theme thoroughly, and ensure that it meet all needs of your website.
            The evaluation will help you to avoid making changes to the theme in
            future.
          </p>
          <h4 className="mt-3">
            Don’t Forget to Read User Reviews and Ratings
          </h4>
          <p className="mt-4">
            There are many instances where WordPress themes directly affected
            the security of websites. Hence, you must assess the quality and
            reliability of each WordPress theme by collecting information from
            various sources. It is always important to read the reviews and
            ratings posted by other users to assess the quality of a theme
            accurately.
          </p>
          <p className="mt-4">
            On the whole, you can curtail website development time significantly
            by using WordPress themes. But the quality and reliability of
            individual themes differ. Hence, you must build the website with the
            right WordPress theme and customize the theme to make your website
            look and feel different.
          </p>

          <h2>
            <strong>Benefits Of Using Premium WordPress Themes</strong>
          </h2>
          <img
            src={require('../Components/img/Benefits.jpg').default}
            className="img-fluid mt-4"
            alt=""
          />
          <p className="mt-5">
            If you have the budget, go for a custom designed WordPress theme
            instead of settling for a free one. But don’t just go to any
            WordPress theme designers. To get the most out of your theme, make
            sure you deal with an experienced and SEO-knowledgeable WordPress
            template designer / developer. Based from experience, a good
            designer will cost you somewhere between 3K to 5K depending on your
            design requirements. If you choose to settle for a custom designed
            WordPress theme, you should understand that sooner or later, you
            will have to pay for the developer to upgrade your theme in case
            WordPress releases a newer version. If you’re OK with the above,
            then a custom designed WordPress theme is highly recommended for
            you. Alternatively, you can settle for the next best thing – Premium
            WordPress themes.
          </p>
          <p className="mt-3">
            Using premium themes like Thesis, Headway, Genesis and Catalyst
            gives you an edge in terms of customization and SEO. These themes
            are coded by no less than the experts so you can be sure they are
            compliant to established web standards. They are also compatible to
            virtually every internet browser so you don’t have to worry about
            how your website will look when viewed in any browser. These are
            just a few benefits that is available to you if you opt to use a
            Premium WordPress theme.
          </p>
          <h3>Premium WP themes Are Cost Efficient</h3>
          <p className="mt-4">
            Cost is one of the reasons why most bloggers and webmasters choose
            to use Premium WordPress themes over custom designed theme. Although
            it shouldn’t be the case, website owners are limited with their
            resources. The truth is, to get a good custom designed WordPress
            theme, it will cost you some money and so, if you are not ready to
            shell out funds for your WordPress theme, then a Premium theme will
            do. It will cost you only a fraction of what you pay for a custom
            designed theme. The problem is, you risk your website’s brand if you
            don’t customize it since there will be many of you using the same
            theme.
          </p>
          <h3 className="mt-3">Premium themes And Customization</h3>
          <p className="mt-4">
            The good news is, Premium WordPress themes are easy to customize. In
            fact, Premium themes’ best selling proposition is their
            “customizability”. While the ease of customization varies from one
            Premium theme to another, they’re generally easy to customize
            without having to deal with codes. This feature is especially
            appealing to website owners who don’t know how to write a code and
            who just want to concentrate on creating solid content and marketing
            their products.
          </p>
          <h3 className="mt-3">Lifetime Updates, Upgrades And Support</h3>
          <p className="mt-4">
            While not true to all Premium WordPress themes, a sizeable number
            does provide lifetime update and upgrade. WordPress continue to
            improve, hence, the release of newer versions. But with the
            enhancements and improvements on WordPress, your outdated theme may
            no longer work as it used to. What’s worse, it could potentially
            inhibit the your website achieving it’s full potential.
          </p>
          <p className="mt-4">
            theme support, another important feature that should be “a-must” for
            every WordPress theme is not always available to all themes. If
            you’ve chosen to use a Premium Template, chances are, that you are
            receiving all the support that you need. Thesis theme for instance,
            has got a great support community where you can get all the help you
            need. A detailed theme documentation that comes with almost all
            WordPress themes is not enough to get you sailing all by yourself.
            Some wild customization that you require might not have been
            documented and so you want someone to help you. This is why support
            is indispensable.
          </p>
          <h3 className="mt-3">Search Engine Optimization</h3>
          <p className="mt-4">
            Traffic is the lifeblood of every website. In order for your online
            business to thrive, you need to make sure people are constantly
            visiting your website. The best route would be from the search
            engines to your website. Why? Because traffic from search engines
            are highly targeted, hence, highly convertible. To get a share of
            traffic from Google, Yahoo and Bing, your website needs to be
            optimized for them. It’s called SEO, short for search engine
            optimization. Now what has Premium WordPress themes got to do with
            SEO you ask? Well, SEO starts on your website and it’s called
            on-page optimization. If the WordPress template you’re using is
            poorly coded and confusing to the search engines, then you can’t
            expect much love from them. Unfortunately, this is often the reality
            that free WordPress theme users have to face. Free WordPress
            Templates are mostly created by novice designers. Premium WordPress
            Templates, on the other hand, are usually created by the more
            experienced and knowledgeable WordPress developers/ designers. And
            because it’s for mass consumption, it would be easy identify the
            good ones from the mediocre ones. All it takes is a quick search on
            Google to read reviews and testimonials from current and previous
            users. For custom designed themes, it’s really hard to tell
            especially if you don’t know how to write a code.
          </p>
        </div>
      </div>
      <div className="wrap-5 p-2 align-items-center">
        <Footer />
      </div>
    </>
  )
}

export default Home
