import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Product from './Product'

const Partner = (props) => {
  return (
    <div>
      <Header />
      <Hero
        handleSubmit={props.handleSubmit}
        location={props.location}
        setLocation={props.setLocation}
        activity={props.activity}
        setActivity={props.setActivity}
        results={props.results}
        setResults={props.setResults}
      />
      {props.results.map(result => {
        return <Product
          key={result._id}
          id={result._id}
          location={result.location}
          activity={result.activity}
          description={result.description}
          img={result.image_url}
        />
      })}

      <Footer />
    </div>
  );
}

export default Partner;
