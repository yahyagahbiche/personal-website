const STAGES = [
  {
    year: "2017",
    title: "Aviation",
    text: "I spent two years flying with a friend building hours toward his pilot's license, and a summer volunteering at Seattle's Museum of Flight. I wasn't drawn to airplanes; I was drawn to how something that complex holds together.",
  },
  {
    year: "2018",
    title: "Business",
    text: "Joined Amazon in customer service. In live listening sessions, employees from new hires to VPs watched me solve real customer problems on the spot, a crash course in thinking clearly while being watched.",
  },
  {
    year: "2019–2020",
    title: "Analytics",
    text: "Studied Business Analytics at Seattle University: Python, SQL, R, statistics, data mining. Graduated in December 2020, already knowing I didn't want to stop at analyzing technology.",
  },
  {
    year: "2020–2022",
    title: "AI / ML",
    text: "Came back to Amazon on a machine-learning team improving a conversational AI product, working on data annotation and how the model learned to respond.",
  },
  {
    year: "2021–2022",
    title: "Data",
    text: "Explored business intelligence and data engineering: SQL, ETL, pipelines. It sharpened how I think about data systems, and told me clearly that data engineering wasn't where I wanted to stay.",
  },
  {
    year: "2022–2023",
    title: "Experimentation",
    text: "Joined Amazon's Foresight team, owning the customer service landing page worldwide. Shipped front-end experiments to 25 countries and made launch calls based on what the A/B tests actually showed.",
  },
  {
    year: "2023–2025",
    title: "Product",
    text: "Took ownership of larger projects, trained teammates, and helped stand up new teams. The job increasingly looked like technical program and product management.",
  },
  {
    year: "2026 to now",
    title: "Software Engineering",
    text: "Became team lead: reviewing code and configs, supporting international launches, and working closely with teams building AI tools as one of their primary users. Now I'm going deeper: React, APIs, data structures, system design.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section section-surface">
      <div className="wrap">
        <p className="section-label">My journey</p>
        <p className="journey-route">
          Aviation → Business → Analytics → AI/ML → Data → Experimentation →
          Product → Software Engineering
        </p>
        <ol className="timeline">
          {STAGES.map((stage) => (
            <li className="timeline-item" key={stage.title}>
              <span className="timeline-marker" aria-hidden="true" />
              <p className="timeline-year">{stage.year}</p>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
