// import React, { useState } from "react";
// import Header from "./Components/header";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const FormSection = () => {
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [submissionError, setSubmissionError] = useState("");

//   const [formDetails, setFormDetails] = useState({
//     email: "",
//     password: "",
//     checkbox: false,
//   });
//   const onEmailBlurHandler = () => {
//     if (formDetails.email === "") {
//       setEmailError("Please enter your email");
//     } else {
//       setEmailError("");
//     }
//   };
//   const onPasswordBlurHandler = () => {
//     if (formDetails.password === "") {
//       setPasswordError("Please enter password");
//     } else {
//       setPasswordError("");
//     }
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     console.log(formDetails);
//     if (formDetails.email === "" || formDetails.password === "") {
//       setSubmissionError("Please correct errors before submitting the form");
//     } else {
//       let response = await fetch("http://localhost:1337/api/form-details", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           data: {
//             Email: formDetails.email,
//             Password: formDetails.password,
//           },
//         }),
//       });
//       let result = await response.status;
//       console.log(result);
//       setSubmissionError("");
//       setFormDetails({
//         email: "",
//         password: "",
//         checkbox: false,
//       });
//     }
//   };
//   return (
//     <>
//       <Header />
//       <div className="form-container pt-5">
//         <Container>
//           <Row>
//             <Col>
//               <Card
//                 className="shadow-lg"
//                 style={{ backgroundColor: "#e3dfde" }}
//               >
//                 <Card.Body>
//                   <Form>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                       <Form.Label>Email address</Form.Label>
//                       <p className="error-msg">{emailError}</p>
//                       <Form.Control
//                         type="email"
//                         placeholder="Enter email"
//                         value={formDetails.email}
//                         name="email"
//                         onChange={(e) =>
//                           setFormDetails({
//                             ...formDetails,
//                             [e.target.name]: e.target.value,
//                           })
//                         }
//                         onBlur={onEmailBlurHandler}
//                       />
//                       <Form.Text className="text-muted">
//                         We will never share your email with anyone else.
//                       </Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                       <Form.Label>Password</Form.Label>
//                       <p className="error-msg">{passwordError}</p>
//                       <Form.Control
//                         type="password"
//                         placeholder="Password"
//                         value={formDetails.password}
//                         name="password"
//                         onChange={(e) =>
//                           setFormDetails({
//                             ...formDetails,
//                             [e.target.name]: e.target.value,
//                           })
//                         }
//                         onBlur={onPasswordBlurHandler}
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                       <Form.Check
//                         type="checkbox"
//                         label="Check me out"
//                         value={formDetails.checkbox}
//                         name="checkbox"
//                         onChange={(e) =>
//                           setFormDetails({
//                             ...formDetails,
//                             [e.target.name]: e.target.checked,
//                           })
//                         }
//                       />
//                     </Form.Group>
//                     <p className="error-msg">{submissionError}</p>
//                     <Button
//                       variant="primary"
//                       type="submit"
//                       onClick={submitHandler}
//                     >
//                       Login
//                     </Button>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };