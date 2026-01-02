import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { currentLang } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-main">
            <div className="about-image">
              <div
                style={{
                  marginTop: "12px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/hero.png`}
                  alt="Studio session"
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>

            <div
              className="section-header"
              style={{ textAlign: currentLang === "en" ? "left" : "right" }}
            >
              <span
                className="section-tag"
                data-en="Who We Are"
                data-ar="من نحن"
              >
                {currentLang === "en" ? "Who We Are" : "من نحن"}
              </span>
            </div>

            <div
              className="about-text"
              style={{ textAlign: currentLang === "en" ? "left" : "right" }}
            >
              <p
                className="about-description"
                data-en="WATEEN is an Emirati creative production establishment specializing in podcasting, social media coverage, commercials"
                data-ar="وتين هي مؤسسة إماراتية للإنتاج الإبداعي، متخصصة في صناعة البودكاست، والتغطية الإعلامية عبر وسائل التواصل الاجتماعي، وإنتاج المحتوى البصري المؤثر عالي الجودة."
              >
                {currentLang === "en"
                  ? "WATEEN is an Emirati creative production establishment specializing in podcasting, social media coverage, commercials, and high-impact visual content."
                  : "وتين هي مؤسسة إماراتية للإنتاج الإبداعي، متخصصة في صناعة البودكاست، والتغطية الإعلامية عبر وسائل التواصل الاجتماعي، وإنتاج المحتوى البصري المؤثر عالي الجودة."}
              </p>
              <p
                className="about-description"
                data-en="We help organizations, government entities, and brands communicate their message with clarity, credibility, and creativity across digital and traditional platforms."
                data-ar="نساعد المؤسسات والجهات الحكومية والعلامات التجارية على إيصال رسالتهم بوضوح ومصداقية وإبداع عبر المنصات الرقمية والتقليدية."
              >
                {currentLang === "en"
                  ? "We help organizations, government entities, and brands communicate their message with clarity, credibility, and creativity."
                  : "نساعد المؤسسات والجهات الحكومية والعلامات التجارية على إيصال رسالتهم بوضوح ومصداقية وإبداع عبر المنصات الرقمية والتقليدية."}
              </p>
              <p
                className="about-description"
                data-en="With a strong focus on latest AI technologies, updated market tools and topics, WATEEN transforms ideas into engaging media experiences that build trust, enhance visibility, and strengthen public connection."
                data-ar="مع التركيز القوي على أحدث تقنيات الذكاء الاصطناعي، وأدوات السوق المحدثة والموضوعات المعاصرة، يحول وتين الأفكار إلى تجارب إعلامية جذابة تبني الثقة وتعزز الحضور وتقوي التواصل مع الجمهور."
              >
                {currentLang === "en"
                  ? "With a strong focus on latest AI technologies, updated market tools and topics, WATEEN transforms ideas into engaging media experiences."
                  : "مع التركيز القوي على أحدث تقنيات الذكاء الاصطناعي، وأدوات السوق المحدثة والموضوعات المعاصرة، يحول وتين الأفكار إلى تجارب إعلامية جذابة تبني الثقة وتعزز الحضور وتقوي التواصل مع الجمهور."}
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div
              className="visual-card"
              role="region"
              aria-label={currentLang === "en" ? "Our Vision" : "رؤيتنا"}
            >
              <div className="visual-icon" aria-hidden="true">
                {/* Lightbulb SVG (inline, reliable) */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M9 18h6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 22h4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3a6 6 0 00-4 10v1a2 2 0 002 2h4a2 2 0 002-2v-1a6 6 0 00-4-10z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 data-en="Our Vision" data-ar="رؤيتنا">
                {currentLang === "en" ? "Our Vision" : "رؤيتنا"}
              </h3>
              <p
                data-en="To become the leading media production and podcasting house in the UAE, known for creating meaningful, influential, and future-ready content that amplifies voices and builds lasting impact."
                data-ar="أن نكون من روّاد بيوت الإنتاج الإعلامي وصناعة البودكاست في دولة الإمارات العربية المتحدة والوطن العربي، ومعروفين بابتكار محتوى هادف، مؤثر، ومواكب للمستقبل، يصنع الأصوات ويترك أثرًا مستدامًا."
              >
                {currentLang === "en"
                  ? "To become the leading media production and podcasting house in the UAE, known for creating meaningful, influential, and future-ready content that amplifies voices and builds lasting impact."
                  : "أن نكون من روّاد بيوت الإنتاج الإعلامي وصناعة البودكاست في دولة الإمارات العربية المتحدة والوطن العربي، ومعروفين بابتكار محتوى هادف، مؤثر، ومواكب للمستقبل، يصنع الأصوات ويترك أثرًا مستدامًا."}
              </p>
            </div>

            <div
              className="visual-card"
              role="region"
              aria-label={currentLang === "en" ? "Our Mission" : "مهمتنا"}
            >
              <div className="visual-icon" aria-hidden="true">
                {/* Bullseye SVG */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 data-en="Our Mission" data-ar="مهمتنا">
                {currentLang === "en" ? "Our Mission" : "مهمتنا"}
              </h3>
              <p
                data-en="To empower institutions and brands by delivering professional podcasting, visual production, and social media coverage services that combine creativity, strategy, and technical excellence—aligned with UAE values and global media standards."
                data-ar="تمكين المؤسسات والعلامات التجارية من خلال تقديم خدمات احترافية في صناعة البودكاست، والإنتاج المرئي، والتغطية الإعلامية عبر وسائل التواصل الاجتماعي، تجمع بين الإبداع والاستراتيجية والتميز التقني، وبما يتماشى مع قيم دولة الإمارات والمعايير الإعلامية العالمية."
              >
                {currentLang === "en"
                  ? "Empowering institutions and brands with professional podcasting, visual production and social media coverage—combining creativity, strategy and technical excellence."
                  : "تمكين المؤسسات والعلامات التجارية من خلال تقديم خدمات احترافية في صناعة البودكاست، والإنتاج المرئي، والتغطية الإعلامية عبر وسائل التواصل الاجتماعي، تجمع بين الإبداع والاستراتيجية والتميز التقني، وبما يتماشى مع قيم دولة الإمارات والمعايير الإعلامية العالمية."}
              </p>
            </div>

            {/* Our Values Section */}
            <div className="about-values" style={{ marginTop: "32px" }}>
              <div
                className="section-header"
                style={{ textAlign: currentLang === "en" ? "left" : "right" }}
              >
                <span
                  className="section-tag"
                  data-en="Our Values"
                  data-ar="قيمنا"
                >
                  {currentLang === "en" ? "Our Values" : "قيمنا"}
                </span>
              </div>
              <div className="values-grid">
                {/* Authenticity */}
                <div
                  className="value-card"
                  style={{
                    background: "rgba(52, 152, 219, 0.1)",
                    borderRadius: "12px",
                    padding: "16px",
                    textAlign: currentLang === "en" ? "left" : "right",
                    border: "1px solid rgba(52, 152, 219, 0.2)",
                  }}
                  data-aos="fade-up"
                >
                  <div
                    className="value-icon"
                    style={{
                      fontSize: "22px",
                      marginBottom: "8px",
                      color: "#3498db",
                    }}
                  >
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#1a1a1a",
                    }}
                    data-en="Authenticity"
                    data-ar="الأصالة"
                  >
                    {currentLang === "en" ? "Authenticity" : "الأصالة"}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.5",
                      color: "#666",
                    }}
                    data-en="Real stories, real impact"
                    data-ar="قصص حقيقية، تأثير حقيقي"
                  >
                    {currentLang === "en"
                      ? "Real stories, real impact"
                      : "قصص حقيقية، تأثير حقيقي"}
                  </p>
                </div>

                {/* Excellence */}
                <div
                  className="value-card"
                  style={{
                    background: "rgba(52, 152, 219, 0.1)",
                    borderRadius: "12px",
                    padding: "16px",
                    textAlign: currentLang === "en" ? "left" : "right",
                    border: "1px solid rgba(52, 152, 219, 0.2)",
                  }}
                  data-aos="fade-up"
                >
                  <div
                    className="value-icon"
                    style={{
                      fontSize: "22px",
                      marginBottom: "8px",
                      color: "#3498db",
                    }}
                  >
                    <i className="fas fa-award" aria-hidden="true"></i>
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#1a1a1a",
                    }}
                    data-en="Excellence"
                    data-ar="التميز"
                  >
                    {currentLang === "en" ? "Excellence" : "التميز"}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.5",
                      color: "#666",
                    }}
                    data-en="High production quality in every detail"
                    data-ar="جودة إنتاج عالية في كل التفاصيل"
                  >
                    {currentLang === "en"
                      ? "High production quality in every detail"
                      : "جودة إنتاج عالية في كل التفاصيل"}
                  </p>
                </div>

                {/* Creativity */}
                <div
                  className="value-card"
                  style={{
                    background: "rgba(52, 152, 219, 0.1)",
                    borderRadius: "12px",
                    padding: "16px",
                    textAlign: currentLang === "en" ? "left" : "right",
                    border: "1px solid rgba(52, 152, 219, 0.2)",
                  }}
                  data-aos="fade-up"
                >
                  <div
                    className="value-icon"
                    style={{
                      fontSize: "22px",
                      marginBottom: "8px",
                      color: "#3498db",
                    }}
                  >
                    <i className="fas fa-lightbulb" aria-hidden="true"></i>
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#1a1a1a",
                    }}
                    data-en="Creativity"
                    data-ar="الإبداع"
                  >
                    {currentLang === "en" ? "Creativity" : "الإبداع"}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.5",
                      color: "#666",
                    }}
                    data-en="Innovative storytelling approaches"
                    data-ar="أساليب سرد قصصي مبتكرة"
                  >
                    {currentLang === "en"
                      ? "Innovative storytelling approaches"
                      : "أساليب سرد قصصي مبتكرة"}
                  </p>
                </div>

                {/* Impact */}
                <div
                  className="value-card"
                  style={{
                    background: "rgba(52, 152, 219, 0.1)",
                    borderRadius: "12px",
                    padding: "16px",
                    textAlign: currentLang === "en" ? "left" : "right",
                    border: "1px solid rgba(52, 152, 219, 0.2)",
                  }}
                  data-aos="fade-up"
                >
                  <div
                    className="value-icon"
                    style={{
                      fontSize: "22px",
                      marginBottom: "8px",
                      color: "#3498db",
                    }}
                  >
                    <i className="fas fa-bullhorn" aria-hidden="true"></i>
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#1a1a1a",
                    }}
                    data-en="Impact"
                    data-ar="التأثير"
                  >
                    {currentLang === "en" ? "Impact" : "التأثير"}
                  </h4>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.5",
                      color: "#666",
                    }}
                    data-en="Content that informs, inspires, and influences"
                    data-ar="محتوى يُعلم ويُلهم ويُؤثر"
                  >
                    {currentLang === "en"
                      ? "Content that informs, inspires, and influences"
                      : "محتوى يُعلم ويُلهم ويُؤثر"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
