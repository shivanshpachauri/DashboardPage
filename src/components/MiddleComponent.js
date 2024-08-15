import * as React from "react";
import Card from "react-bootstrap/Card";
import data from "./Data.json";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function MiddleComponent() {
  const [widgetData, setWidgetData] = useState(data);
  const [isinput, setinputvalue] = useState(false);

  const [newWidget, setNewWidget] = useState({ key: "", url: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWidget((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddWidget = () => {
    setinputvalue(true);
    if (newWidget.key && newWidget.url) {
      setWidgetData((prevData) => {
        return prevData.map((item) => {
          return {
            ...item,
            widget: [...item.widget, { [newWidget.key]: newWidget.url }],
          };
        });
      });
      setNewWidget({ key: "", url: "" });
    }
  };

  return (
    <div style={{ margin: "70px" }}>
      <br />
      <h4>CNAPP Dashboard</h4>
      <br />
      {widgetData &&
        widgetData.map((categoryData) => (
          <div key={categoryData.id} style={{ marginBottom: "20px" }}>
            <strong>
              <h6>{categoryData.category}</h6>
            </strong>
            {/* Flex container to hold cards side by side */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {categoryData.widget.map((widget, index) =>
                Object.entries(widget).map(([key, value]) => (
                  <div
                    key={index + key}
                    style={{
                      flex: "1",
                      maxWidth: "300px",
                      marginBottom: "10px",
                    }}
                  >
                    <Card style={{ width: "100%" }}>
                      <Card.Body>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <strong>{key}:</strong>
                          <br />
                          {typeof value === "string" ? (
                            <img
                              src={value}
                              alt={key}
                              style={{
                                width: "100%",
                                maxHeight: "200px",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            value
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              )}

              {/* <div style={{ textAlign: "center" }}> */}

              {/* </div> */}
              {/* Input form for adding new widgets */}
              {isinput ? (
                <div style={{ marginTop: "20px" }}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Widget Key</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter widget key"
                      name="key"
                      value={newWidget.key}
                      onChange={handleInputChange}
                    />
                    <Form.Label>Widget URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter widget URL"
                      name="url"
                      value={newWidget.url}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleAddWidget}>
                    Add New Widget
                  </Button>
                </div>
              ) : (
                <Button variant="outline-secondary" onClick={handleAddWidget}>
                  Add Widget
                </Button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
