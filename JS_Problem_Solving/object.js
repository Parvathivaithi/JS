let input = [ 

    { 

        "name": "SupplierName", 

        "category": "custom", 

        "value": "Domestic US Supplier" 

    }, 

    { 

        "name": "SupplierAddress", 

        "category": "custom", 

        "value": "198 S Ohio Ave, Munic IN, 47305-2757, USA" 

    }, 

    { 

        "name": "SupplierContact", 

        "category": "custom", 

        "value": "19998564321" 

    }, 

    { 

        "name": "InvoiceNumber", 

        "category": "custom", 

        "value": "1845431" 

    }, 

    { 

        "name": "InvoiceDate", 

        "category": "custom", 

        "value": "2024-04-28" 

    }, 

    { 

        "name": "BillToPartyName", 

        "category": "custom", 

        "value": "John Purchaser", 

    }, 

    { 

        "name": "BillToPartyCompany", 

        "category": "custom", 

        "value": "Standard Products" 

    }, 

    { 

        "name": "BillToPartyStreet", 

        "category": "custom", 

        "value": "3150 SW 9t  Street" 

    }, 

    { 

        "name": "BillToPartyCity", 

        "category": "custom", 

        "value": "Miami" 

    } 

  ] 

  

let result={} 

  for(let data of input ) 

  { 

      let key=data.name 

      let value=data.value 

     

      console.log(key,value) 

   

      if(key.startsWith('Supplier')) 

      { 

          if(!result.Supplier) 

            result.Supplier = {}; 

          let subKey=key.replace("Supplier","") 

          result.Supplier[subKey]=value 

      } 

      else if(key.startsWith('BillToParty')) 

      { 

          if(!result.BillToParty) 

            result.BillToParty = {}; 

          let subKey=key.replace("BillToParty","") 

          result.BillToParty[subKey]=value 

      } 

      else 

      { 

          result[key]=value 

      } 

  } 

  console.log(result) 