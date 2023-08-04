import './App.css';
import {useState} from 'react';
import {Button, Typography,TextField} from "@mui/material";
function Production()
{
    const [image,setImage]=useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleimageupload=(event)=>{
        const file=event.target.files[0];
        if (file){
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
            alert("image is uploaded")
        }
    };
    return(
        <>
        <Typography variant="h4" align="center">
            Productions
        </Typography>
        <Typography variant="body1" align="center" >
            Existing Productions
        </Typography>
        <div className='addimage'>
        {previewImage ? (
          <img src={previewImage} alt="Uploaded" className="preview-image" />
        ) :(
            <label htmlFor='file-input'>Add Image</label>)}
            <input type='File' style={{display:'none'}} id="file-input" onChange={handleimageupload}/>
        </div>
        {image && (
        <Typography variant="body1" align="center">
        Selected Image: {image.name}
        </Typography>
        )}
        <div className='prod'>
        <TextField variant='outlined' label="Production Name"/>
        <Typography variant='body1'>Type of Production</Typography>
        <select className='opt'>
            <option>Select Option</option>
            <option>Feature Film</option>
            <option>Short Film</option>
            <option>TV Series</option>
            <option>Documentary</option>
            <option>Corporate Film</option>
            <option>Web Series</option>
            <option>Episode</option>
            <option>News Cast</option>
            <option>Stage Production</option>
            <option>Mini Series</option>
            <option>Clip</option>  
        </select>
        </div>
        <Button variant="outlined" color="primary" className='b'>Add New Production</Button>
        </>
    )
};
export default Production;