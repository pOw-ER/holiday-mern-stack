
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Product from './Product';


const Destination = (props) => {

  return (
    <div>
      <Header />
      <section>
        <Hero
          handleSubmit={props.handleSubmit}
          location={props.location}
          setLocation={props.setLocation}
          activity={props.activity}
          setActivity={props.setActivity}
          results={props.results}
          setResults={props.setResults}
        />
        {props.results &&
          props.results.map(result => {
            return (
              <Product
                key={result._id}
                location={result.location}
                activity={result.activity}
                description={result.description}
                img={result.image_url}
              />
            )
          })}
      </section>
      <Footer />
    </div>
  );
}

export default Destination;
