import React from 'react';

const Hero = (props) => {
  return (
    <section id="hero" style={{ background: `url('${process.env.PUBLIC_URL}/img/hero_holiday.png') right no-repeat` }}>
      <h1>Explore and</h1>
      <h1>Travel</h1>
      <p><b>Holiday Finder</b></p>
      <span className="line"></span>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <select id="countries" name="countries" onChange={(event) => props.setLocation(event.target.value)}>
          <option value="">Location</option>
          <option value="Germany">Germany</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Russia">Russia</option>
          <option value="Netherland">Netherland</option>
        </select>
        <select id="activities" name="activities" onChange={(event) => props.setActivity(event.target.value)}>
          <option value="">Activity</option>
          <option value="Eating">Eating</option>
          <option value="Drinking">Drinking</option>
          <option value="Smoking">Smoking</option>
          <option value="Yoga">Yoga</option>
        </select><br />
        <input type="submit" value="Explore" className="orange-white-button" />
        <input type="submit" value="View All" className="orange-white-button ml" />
      </form>
    </section>
  );
}

export default Hero;
