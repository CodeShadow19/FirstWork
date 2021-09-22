class AppUrl{

    static BaseUrl='http://localhost:8000';

    static HomeTop=this.BaseUrl+'/getHomeData';
    static HomePostData=this.BaseUrl+'/getHomePagePostData';
    static SinglePageData=this.BaseUrl+'/singlePageData/';
    static NextPrev=this.BaseUrl+'/nextprev/';
    //static searchPost=this.BaseUrl+'/searchPost';
    static AddNewPost=this.BaseUrl+'/addNewPost';
    static Test=this.BaseUrl+'/test';
    static OnLogin=this.BaseUrl+'/onLogin';
    static OnRegister=this.BaseUrl+'/onRegister';
    //static HomePostData=this.BaseUrl+'/getHomePostData';
}
export default AppUrl;