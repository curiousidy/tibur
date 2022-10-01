import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createBird, deleteBird, updateBird } from '../redux/slices/bird_slice';
import { deleteInformation, postInformation, putInformation } from '../services/bird_services';
import classes from './FormBird.module.css';

type Props ={
  selectedItem: string;
}

const FormBird: React.FC<Props> = ({selectedItem}) => {
  
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = async (e:any) => {
   
    const id= e.id;
    
    delete e.id;
    switch(selectedItem){

      case 'addbird' :  
        const respAdd = await postInformation("api/birds",{...e});
        const valueAdd = await respAdd.json();
        dispatch(createBird(valueAdd));
        break;

      case 'updatebird':
        
        const respUp = await putInformation(`api/birds/${id}`,{...e});
        const valueUp = await respUp.json();
        console.log(valueUp[0]);
        if (valueUp[0] === 1) dispatch(updateBird({...e,id})); 
        break;

      case 'deletebird':
        const respDel = await deleteInformation(`api/birds/${id}`);
        // const valueDel = await respDel.json();
        console.log(respDel);
         if (respDel.statusText === 'OK') dispatch(deleteBird(id));

        break;
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(sendData)}>


                    
                     { (selectedItem !== 'addbird') && (
                      <IonItem> 
                        <IonLabel position='floating'>Id</IonLabel>
                          <IonInput type="text" placeholder="id" {...register("id",{ required: true, minLength: 1 })}/>
                      </IonItem>
                      )}
                        {errors.id && <p className={classes.colorP}>Se requiere el id del pájaro</p>}

                      { (selectedItem !== 'deletebird') && (
                      <IonItem>
                        <IonLabel position='floating'>Name</IonLabel>
                        <IonInput type="text" placeholder="name" {...register("name",{ required: true, minLength: 3 })}/>
                      </IonItem>
                      )}
                      {errors.name && <p className={classes.colorP}>Se requiere el nombre del pájaro</p>}

                      { (selectedItem !== 'deletebird') && (
                      <IonItem>
                        <IonLabel position='floating'>Power</IonLabel>
                        <IonInput type="text" placeholder="power" {...register("power",{ required: true, minLength: 3 })}/>
                      </IonItem>
                      )}
                      {errors.power && <p className={classes.colorP}>Se requiere el poder del pájaro</p>}
                      
                      { (selectedItem !== 'deletebird') && (
                      <IonItem>
                        <IonLabel position='floating'>Genre</IonLabel>
                        <IonInput type="text" placeholder="genre" {...register("genre",{ required: true, minLength: 3 })}/>
                      </IonItem>
                      )}
                      {errors.genre && <p className={classes.colorP}>Se requiere el género</p>}

                      { (selectedItem !== 'deletebird') && (
                      <IonItem>
                        <IonLabel position='floating'>Size</IonLabel>
                        <IonInput type="text" placeholder="size" {...register("size",{ required: true, minLength: 3 })}/>
                      </IonItem>
                      )}
                      {errors.size && <p className={classes.colorP}>Se requiere el tamaño</p>}

                      { (selectedItem !== 'deletebird') && (
                      <IonItem>
                        <IonLabel position='floating'>Scope</IonLabel>
                        <IonInput type="text" placeholder="scope" {...register("scope",{ required: true, minLength: 3 })}/>
                      </IonItem>
                      )}
                      {errors.scope && <p className={classes.colorP}>Se requiere el alcance</p>}

                    <IonButton className={classes.fullWidth} type='submit'>Enviar datos</IonButton>
                    </form>
  )
}

export default FormBird


