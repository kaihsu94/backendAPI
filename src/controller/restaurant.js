import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';
import bodyParser from 'body-parser';

export default({config,db}) => {
  let api = Router();

  // v1/resutrant/add'

  api.post('/add', (req,res) =>{
    let newRest = new Restaurant();
    newRest.name = req.body.name;
    newRest.id =  req.body.id;

    newRest.save(err =>{
      if(err){
        res.send(err);
      }
      res.json({message: "restaurant saved sucessfully"});
    });
  });

  // get all
  api.get('/',(req,res)=>{
    Restaurant.find({},(err,restaurants)=>{
      if(err){
        res.send(err);
      }
      res.json(restaurants);
    });
  });
//get by id
    api.get('/:id' , (req,res)=>{
      Restaurant.findById(req.params.id, ( err, restaurant)=>{
        if(err){
          res.send('could not find this resturant ' + err);
        }
        res.json(restaurant);
      });
    });
// delete all

  api.delete('/delete', (req,res)=>{
    Restaurant.remove({},(err,restaurant)=>{
      if(err){
        res.send("cannot not delete" + err);
      }
      res.json('Deleted all collections');
    });
  });

  api.delete('/delete/:id', (req,res)=> {
      Restaurant.remove({id: req.params.id}, (err, restaurant)=>{
        if(err){
          res.send("Could not find document to delete " + err);
        }
        res.json("Deleted document " + req.params.id);
      });
  });
  return api;
}
