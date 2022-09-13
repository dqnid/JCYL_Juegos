from pykml import parser
import csv
fields = ['lat','lng','id','nombre','superficie','web','acceso']
filename = "zona_rec_filtrado.csv"
with open (filename, 'w') as csvfile:
    csvwriter = csv.writer(csvfile)    
    csvwriter.writerow(fields)
    with open('zona_rec.kml','r',encoding="utf-8") as f:
        doc = parser.parse(f).getroot()
    line = ['0','0','0','0','0','0','0']
    for place in doc.Document.Folder.Placemark:
        cadena = str(place.Point.coordinates)
        coords = cadena.split(",")
        line[0] = coords[1]
        line[1] = coords[0]
        contador = 0
        for field in place.ExtendedData.SchemaData.SimpleData:
            if (contador == 0):
                atr_id = str(field)
                line[2] = atr_id
            contador+=1
        with open('zona_rec.csv') as f:
            reader = csv.DictReader(f, delimiter=',')
            for row in reader:
                iden = row['atr_gr_id']
                name = row['equip_b_nombre']
                plain = row['equip_b_superficie_aprox']
                web = row['web']
                access = row['equip_b_acceso_modo']
                if (iden == atr_id):
                    line[3] = name
                    line[4] = plain
                    line[5] = web
                    line[6] = access
        csvwriter.writerow(line)