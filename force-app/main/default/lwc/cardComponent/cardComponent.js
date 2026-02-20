import { LightningElement, api } from 'lwc';

export default class CardComponent extends LightningElement {
    @api iconName;    
    @api title;        
    @api description;  
}