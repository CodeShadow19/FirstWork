class AppUrl{

    static BaseUrl='http://localhost:8000';

    static HomeTop=this.BaseUrl+'/getHomeData';
    static HomePostData=this.BaseUrl+'/getHomePagePostData';
    static searchPost=this.BaseUrl+'/searchPost';
    static AddNewPost=this.BaseUrl+'/addNewPost';
    static Test=this.BaseUrl+'/test';
    //static HomePostData=this.BaseUrl+'/getHomePostData';
}
export default AppUrl;