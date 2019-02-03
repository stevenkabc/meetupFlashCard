import React, { Component } from "react";
import "./App.css";
const AddItemToCartButton = ({ icon, title }) => (
  <button>
    {!!icon && <i className={"fa fa-" + icon} />}
    {title}
  </button>
);
class App extends Component {
  state = {
    loading: true,
    status: "loading",
    clicked: -1,
    rsvps: [],
    members: []
  };
  componentDidMount = () => {
    fetch(
      "/2/rsvps?offset=0&format=json&signed=true&rsvp=yes&event_id=257046298&page=200&fields=&key=7862814232c775b72f12448011388&order=name&desc=false"
    )
      .then(res => res.json())
      .then(response => {
        const rsvps = response.results.filter(r =>
          r.hasOwnProperty("member_photo")
        );
        const members = rsvps.reduce(
          (members, rsvp, index) => {
            const { member_id, name } = rsvp.member;

            const mp = rsvp.member_photo;
            const photo_link = mp.highres_link || mp.photo_link;
            members[0].push(member_id);
            members[1].push({ name, photo_link });
            return members;
          },
          [[], []]
        );
        this.setState({ rsvps, members, loading: false });
      })
      .catch(error => {
        const err = new Error(error);
        console.log(err);
      });
  };
  cdu;

  render() {
    const { members, rsvps, loading } = this.state;
    const memberArray = members[0];
    const memberObjects = members[1];
    let list;
    if (loading) {
      list = <li key={0}>Loading</li>;
    } else {
      list = memberObjects.map((m, index) => {
        const member_id = members[0][index];
        const { name, photo_link } = m;
        // if (!r.hasOwnProperty("member_photo")) {
        //   return list;
        // } else {
        // let { highres_link, photo_link } = r.member_photo;
        // photo_link = highres_link ? highres_link : photo_link;
        return (
          <li key={`${m}-${index}`}>
            <img
              className="photo"
              link
              src={photo_link}
              alt={`${name} ID-${member_id}`}
            />
            <span style={{ paddingBottom: '4em', marginBottom: '30px' }}>
              {`${name} ID-${member_id}`}
            </span> 
          </li>
        );

        // }
      });
    }
    return (
      <div>
        <AddItemToCartButton title="Add item to cart" />
        <AddItemToCartButton title="Add item to cart" icon="plus" />
        <ul style={{ display: "inline" }}>{list}</ul>
      </div>
    );
  }
}

export default App;
