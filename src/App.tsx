import React from 'react';
import './App.scss';
import FullHeader from './components/FullHeader';
import HomeCarousel from './components/HomeCarousel';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <FullHeader></FullHeader>
      <HomeCarousel></HomeCarousel>
      <section className="fs-content-body">
        <div className="fs-grid">
          <div className="fs-grid-col-9">
            <Card heading="Farm Insurance from Future State" renderHeadingAs="h1">
              <p>At Future State, we know how important it is to have peace of mind when it comes to insuring your personal and business property. That's why we are proud to make it our business to know and fully understand your needs.</p>
              <p>Whether you run a farming business, garden centre, nursery or dealership, you can be sure your insurance policy will be designed around you, for you.</p>
              <p>With access to a wide range of farm insurance specialists, including our own bespoke farm insurance policies, we provide independent insurance advice with competitive premiums and a prompt and efficient claims service.</p>
              <div className="fs-home-primary-cta">
                <Button type="filled" variant="primary" size="medium">Get an instant online quote</Button>
                <Button type="ghost" variant="primary" size="medium">Retrieve a Quote</Button>
              </div>
            </Card>
          </div>
          <div className="fs-grid-col-3">
            <Card heading="Existing Customers" renderHeadingAs="h2" variant="accent">
              <p>View you policy documents or make a claim</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
