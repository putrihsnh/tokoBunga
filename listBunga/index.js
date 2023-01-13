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
    
   methods:{
        savePembeli: function(){
            let data = {
                nomor: this.nomor,
                namaBunga: this.namaBunga,

                status: true,
            }

            axios
            .post('https://projek-uas-iota.vercel.app/listPembeli/', data)
            .then(res =>{
                this.dataPembeli = res
                
                this.getPembeli()
            })
            .catch(err =>{
                console.log(err);
            })
        },

        getPembeli: function() {
            axios
                .get('https://projek-uas-iota.vercel.app/listPembeli')
                .then((response) =>{
                console.log(response.data);
                this.dataPembeli = response.data

                
                }).catch(err =>{
                console.log(err);
                this.error = true
                })
            .finally(() => (this.loading = false))
        },



        deletePembeli: function(id){
            axios
            .delete('https://projek-uas-iota.vercel.app/listPembeli/' + id)
            .then(res =>{
                console.log(res);
            })
            .catch(err =>{
                err
            })
        }
    },

    mounted(){
        this.getPembeli()
    }
})