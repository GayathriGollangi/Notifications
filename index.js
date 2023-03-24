const Notification = (props) => {
  //  Write your code here.
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} alt="image" />
      <p>{props.text}</p>
    </li>
  );
};
const element = (
  //  Write your code here.
  <div className="notifications-container">
    <h1 className="container-heading">Notifications</h1>
    <Notification
      className="box1"
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
    />
    <Notification
      className="box2"
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
    />
    <Notification
      className="box3"
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
    />
    <Notification
      className="box4"
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
