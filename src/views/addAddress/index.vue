<template>
    <div class="addAddress dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">{{type=='add'?'添加地址':'修改地址'}}</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier" style="margin-bottom: 48px;">
            <div class="content margin-top-sm">
                <van-field
                    v-model="name"
                    name="收货人"
                    label="收货人"
                    placeholder="收货人姓名"
                    size="large"
                />
                <van-field
                    v-model="phone"
                    name="手机号码"
                    label="手机号码"
                    placeholder="收货人手机号码"
                    maxlength='11'
                    size="large"
                />
                <van-field
                    readonly
                    clickable
                    name="area"
                    :value="province+city+county"
                    label="地区选择"
                    placeholder="点击选择省市区"
                    @click="showArea = true"
                    right-icon="arrow"
                    size="large"
                />
                <van-field
                    v-model="address"
                    rows="1"
                    autosize
                    label="详细地址"
                    type="textarea"
                    placeholder="真实详细地址"
                />
                <van-field name="switch" label="设为默认地址" input-align='right' size="large">
                    <template #input>
                        <van-switch v-model="isDefaultAddress" size="20" active-color="#EC501F" />
                    </template>
                </van-field>
            </div>
        </div>
        <div class="buy-box">
            <div class="buyBtn text-df text-center bg-orangeDark" @click="save()">保存</div>
        </div>
        <!-- 省市县弹框 -->
        <van-popup v-model="showArea" position="bottom" :style="{ height: '40%' }">
            <van-area :area-list="areaList" :columns-num='3' :item-height='38' @confirm='confirmFn' @change="changeFn" @cancel="cancelFn" />
        </van-popup>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    import { isCellPhone } from '@/utils/validate'
    import areaList from '@/utils/area'

    export default {
        name: 'addAddress',
        components: {
        },
        props:{
        },
        data() {
            return {
                type: 'add',
                name: '',
                phone: '',
                showArea: false,
                province: '',
                city: '',
                county: '',
                address: '',
                isDefaultAddress: false,
                areaList:areaList,
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.type = this.$route.query.type;
            this.info();
        },
        methods: {
            async info() {
                // await this.queryInvestProduct();
            },
            changeFn(event) {
                console.log('改变',event);
            },
            confirmFn(event){
                this.showArea = false;
                let arr,SelectProvinceName,SelectCityName,SelectCountyName;
                arr = event;
                SelectProvinceName = arr[0].name;   // 省
                SelectCityName = arr[1].name;   // 市
                SelectCountyName = arr[2].name;  // 区
                this.province = SelectProvinceName;
                this.city = SelectCityName;
                this.county = SelectCountyName;
                console.log('点击了确定按钮',SelectProvinceName,SelectCityName,SelectCountyName)
            },
            cancelFn(){
                this.showArea = false;
                console.log('点击了取消按钮');
            },
            save() {
                if(this.name=='') {
                    this.$notify({ type: 'warning', message: '收货人不能为空！' });
                    return false;
                }
                if(this.phone=='') {
                    this.$notify({ type: 'warning', message: '手机号码不能为空！' });
                    return false;
                } else if(!isCellPhone(this.phone)) {
                    this.$notify({ type: 'warning', message: '手机号码不正确！' });
                    return false;
                }
                if(this.province==''||this.city==''||this.county=='') {
                    this.$notify({ type: 'warning', message: '所在地区不能为空！' });
                    return false;
                }
                if(this.address=='') {
                    this.$notify({ type: 'warning', message: '详细地址不能为空！' });
                    return false;
                }
            },
            goBack() {
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .addAddress {
        .van-cell__title.van-field__label {
            color: var(--darkGray);
            font-size: 14px;
        }
    }
</style>
<style lang="scss" scoped>
    .addAddress {
        height: 100vh;
        .header {
            background: #fff;
        }
        
        .buy-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            background: #f7f7f7;
            .buyBtn {
                width:345px;
                height:36px;
                line-height:36px;
                border-radius:4px;
                margin: 6px auto;
            }
        }
    }
</style>