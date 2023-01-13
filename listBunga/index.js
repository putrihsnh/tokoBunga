let vm = new Vue({
    el: '#app',
    data: function(){
        return{
            dataPembeli : null,
            loading : true,
            error : false,


            nomor: null,
            namaBunga: null
        }
    },

    created: function() {
        this.getPembeli()
    },
    
    methods:{
        savePembeli: function(){
            let _data = {
                nomor: this.nomor,
                namaBunga: this.namaBunga,

                status: true,
            }

            axios
            .post('https://projek-uas-iota.vercel.app/listPembeli', _data)
            .then(response =>{
                $('#exampleModal').modal('hide');
                this.getPembeli();
            })
            .catch(err =>{
                console.log(err);
            })
        },

        getPembeli: function() {
            axios
            .get('https://projek-uas-iota.vercel.app/listPembeli')
            .then(response =>{
                console.log(response.data);
                this.dataPembeli = response.data
                
            })
            .catch(err =>{
                console.log(err);
                })
        },

        deletePembeli(_id) {
            axios
            .delete('https://projek-uas-iota.vercel.app/listPembeli/' + _id)
            .then(response => {
                this.getPembeli();
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
})