import csv
import json
  
def make_json(csvFilePath, jsonFilePath):
    data = {}
    with open(csvFilePath, encoding='UTF-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        for rows in csvReader:
            key = rows['id']
            data[key] = rows
 
    with open(jsonFilePath, 'w', encoding='UTF-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
csvFilePath = r'zona_rec_filtrado.csv'
jsonFilePath = r'zona_rec.json'
 
make_json(csvFilePath, jsonFilePath)