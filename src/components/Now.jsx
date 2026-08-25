const CURRENTLY = [
  "Data Structures & Algorithms",
  "Software Engineering Fundamentals",
  "React & Full-Stack Development",
  "APIs & Backend Development",
  "Databases",
  "System Design",
  "AI Applications",
];

export default function Now() {
  return (
    <section id="now" className="section section-surface">
      <div className="wrap">
        <p className="section-label">Right now</p>
        <div className="prose">
          <p>
            Day to day, I'm a team lead at Amazon: reviewing code and
            configuration changes, supporting major launches, and working
            closely with teams building AI tools as one of their primary
            users.
          </p>
          <p>Outside of that, I'm deliberately building toward engineering:</p>
        </div>
        <ul className="tag-row">
          {CURRENTLY.map((item) => (
            <li className="tag" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
