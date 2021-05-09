
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

const HolidayDetails = (props) => {
  const [detailItem, setDetailItem] = useState([])
  const { match } = props
  useEffect(() => {
    axios.post(`http://localhost:5000/book/${match.params.id}`)
      .then(item => {
        // console.log(item.data);
        setDetailItem(item.data)
      })
  }, [match.params.id])

  return (
    <div>
      <Header />
      <section id="details-page">
        <div>
          <img src={detailItem.image_url} alt="" />
        </div>
        <h2>Holiday Details</h2>
        <div>You can find in {detailItem.location} all choices from {detailItem.activity} activities</div>
      </section>
      <Footer />
    </div>


  );
}

export default HolidayDetails;
