//Array

//const listNilai = ['A' , 'B' , 'C']
//console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'fersa andrson',
        npm: '19421029',
        prodi: 'Informatika'
    },
    {
        nama: 'aji ',
        npm: ' 19421003',
        prodi: 'informatika'
    }
    
]
//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
}