import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";
const { Title } = Typography;
const { TextArea } = Input;

const Category = [
  { key: 1, value: "Animals" },
  { key: 2, value: "People" },
  { key: 3, value: "Landscape" },
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [ArtistValue, setArtistValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PeriodValue, setPeriodValue] = useState("");
  const [CategoryValue, setCategoryValue] = useState(1);
  const [LocationValue, setLocationValue] = useState("");
  const [MaterialValue, setMaterialValue] = useState("");
  const [DimensionValue, setDimensionValue] = useState([0, 0, 0]);
  //TODO
  const [Images, setImages] = useState([]);
  const [Objs, setObjs] = useState([]);
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  const onArtistChange = (event) => {
    setArtistValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPeriodChange = (event) => {
    setPeriodValue(event.currentTarget.value);
  };

  const onCategorySelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };
  const onLocationChange = (e) => {
    setLocationValue(e.currentTarget.value);
  };
  const onMaterialChange = (e) => {
    setMaterialValue(e.currentTarget.value);
  };
  const onDimensionChange = (e) => {
    setDimensionValue(e.currentTarget.value);
  };
  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const updateObjs = (newObjs) => {
    setObjs(newObjs);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (!TitleValue || !CategoryValue || !Images || !Objs) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      artist: ArtistValue,
      images: Images,
      objs: Objs,
      category: CategoryValue,
      period: PeriodValue,
      location: LocationValue,
      material: MaterialValue,
      dimension: DimensionValue,
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Sculpture Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Sculpture");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Your Sculpture</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <div>ImageUpload</div>
        <FileUpload refreshFunction={updateImages} />
        <div>ObjUpload</div>
        <FileUpload refreshFunction={updateObjs} />
        <br />
        <br />
        <Form.Item
          rules={[{ required: true, message: "Please input the Title!" }]}
        >
          <label>Title</label>
          <Input onChange={onTitleChange} value={TitleValue} />
        </Form.Item>
        <label>Artist</label>
        <Input onChange={onArtistChange} value={ArtistValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Period</label>
        <Input onChange={onPeriodChange} value={PeriodValue} />
        <br />
        <br />
        <label>Material</label>
        <Input onChange={onMaterialChange} value={MaterialValue} />
        <br />
        <br />
        <label>Location</label>
        <Input onChange={onLocationChange} value={LocationValue} />
        <br />
        <br />
        <label>Dimension(Length*Width*Height)</label>
        <Input onChange={onDimensionChange} value={DimensionValue} />
        <br />
        <br />
        <select onChange={onCategorySelectChange} value={CategoryValue}>
          {Category.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
