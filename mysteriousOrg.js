// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (specimenNum, dna) =>{
  return {
    number: specimenNum,
    DNA: dna,
    mutate(){
      let newBase = returnRandBase();
      var randIndex = Math.floor(Math.random()*this.DNA.length);
      while(this.DNA[randIndex] === newBase){ 
        newBase = returnRandBase()
      }
      this.DNA[randIndex] = newBase
      return this.DNA
    },
//Compares DNA strands
  compareDNA(otherOrg) {
    const similarities = this.DNA.reduce((acc, curr, idx, arr) => {
  if (arr[idx] === otherOrg.DNA[idx]) {
   return acc + 1;
  } else {
  return acc;
        }
      }, 0);
    const percentOfDNAEqual= (common/this.dna.length)*100;
  const percentTo2Deci = percentOfDNAEqual.toFixed(2);
  console.log(`${this.specimenNum} and ${PAequor.specimenNum} have ${percentageTo2Deci}% DNA in common.`);
  },
      //If a certain percantage of 'A' AND 'G' is present (60% and up), it will likely survive
willLikelySurvive(){
      let cGcount = 0;
      for (let i = 0; i < this.DNA.length; i++){ 
        if(this.DNA[i] === 'G' || this.DNA[i] === 'C'){
          cGcount ++
        }
      }
      var survival = (cGcount/15) * 100 >= 60 ? true : false
      return survival
      }

  }
}  
const num1 = pAequorFactory(1, ['A', 'A', 'T','C','G','A','T','C','G','G','A','A','C','G','T'])
var batch = [];
for(let i = 0; i <= 30; i++){
 batch.push(pAequorFactory(i,mockUpStrand())
 )}