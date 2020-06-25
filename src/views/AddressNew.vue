<template>
    <van-address-edit
            :area-list="areaList"
            show-delete
            @save="onSave"
            @delete="onDelete"
    />
</template>

<script>
    import AreaList from '../api/area';
    import {Toast} from 'vant';

    export default {
        name: "AddressNew",
        data() {
            return {
                areaList: AreaList
            }
        },
        methods: {
            onSave(item) {
                const _this = this
                axios.post('http://localhost:8081/address/create', item).then(function (response) {
                    if (response.data.code == 0) {
                        let instance = Toast('添加成功');
                        setTimeout(() => {
                            instance.close();
                            _this.$router.push('/addressList')
                        }, 1000)
                    }
                })
            },
            onDelete() {
                history.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>