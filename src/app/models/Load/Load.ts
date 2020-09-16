export class Load{
  description: string;
  amount: number;
  power: number;
  private totalPower: number;
  hours: boolean[]; 
  private totalHours: number;
  
  constructor(description: string, amount: number, power: number, hours: boolean[]){
     this.description = description;
     this.amount = amount;
     this.power = power;
     this.hours = hours;
     this.setTotalHours(hours);
     this.setTotalPower(power,amount);
  }

  setTotalHours(hours: boolean[]):number{
      if(hours.length!=24)
      {
          console.log("Error, Invalid hours array!");
          return -1;
      }
      else
      {
          this.totalHours = 0;
          for(let i=0;i<24;i++)
          {
              if(hours[i])
              {
                this.totalHours++;
              }
          }
      }
      return this.totalHours;
  }

  setTotalPower(power:number, amount: number):number{
      this.totalPower = power*amount;
      return this.totalPower;
  }
}