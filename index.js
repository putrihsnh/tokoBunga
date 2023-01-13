let vm = new Vue({
    el: '#app',
    data: function(){
        return{
            dataPembeli : null,
            loading : true,
            error : false,


            nama: null,
            alamat: null
        }
    },
    
   methods:{
        saveBunga: function(){
            let data = {
                nama: this.nama,
                alamat: this.alamat,

                status: true,
            }

            axios
            .post('https://projek-uas-iota.vercel.app/listBunga/', data)
            .then(res =>{
                this.dataPembeli = res
                
                this.getBunga()
            })
            .catch(err =>{
                console.log(err);
            })
        },

        getBunga: function() {
            axios
                .get('https://projek-uas-iota.vercel.app/listBunga')
                .then((response) =>{
                this.dataPembeli = response.data
                this.getBunga()
                }).catch(err =>{
                console.log(err);
                this.error = true
                })
            .finally(() => (this.loading = false))
        },



        deleteBunga: function(_id){
            axios
            .delete('https://projek-uas-iota.vercel.app/listBunga/' + _id)
            .then(res =>{
                console.log(res);
            })
            .catch(err =>{
                err
            })
        }
    },

    mounted(){
        this.getBunga()
    }
})