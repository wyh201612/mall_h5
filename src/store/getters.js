const getters = {
    isLoading: state => state.user.isLoading,
    accessToken: state => state.user.accessToken,
    loginName: state => state.user.loginName,
    mobile: state => state.user.mobile,
    userId: state => state.user.userId,
    bindCard: state => state.user.bindCard,
    bindAddress: state => state.user.bindAddress,
    bindPayPassword: state => state.user.bindPayPassword,
    avatar: state => state.user.avatar,
    goldPrice: state => state.user.goldPrice
}
export default getters
