## Project 3: Space News

### Project Plan
Project 3 is building an app with React and API. We decided to use [https://thespacedevs.com/snapi] ![api example](./public/APIinfo.png)

We decided to use the react-router-lab (National Park Service) homework and NASA.gov as a template.

![Routes](./planning/routes.png)
![Wireframe](./planning/wireframe.png)

App.js
* loading API info into *articleList*
* passing *articleList* as a prop to *articleList*
* using *nav* to hold link to *ArticleList*

ArticleList.js
* *Link to="/"*
* mapping through *articleList* and displaying *article*

ArticleDetail.js
* route *Route path="/article/:id"*

### Project collaboration for Git Workflow
1. git checkout master (take you to the master branch)
2. git pull origin(link to prod repository)  master(branch) - (to get the most recent repository changes)
3. git merge hotfix(branch_dev) - (to merge change for dev branch to master branch)
4. git push origin master (push master branch to origin
    * If you are not the last person to merge, first do steps 1 and 2 before creating a branch
5. git branch -d (delete) betsy (delete branch)
6. git checkout -b betsy (recreate betsy branch)

### Project Links

[Here is the project repository.](https://github.com/bruce123123/space-news)

[Here is the published project.](http://space-news.surge.sh/)

### Technical Goals
![Technical Goals](./planning/technicalgoals.md)

### Technology Used
* React
* Axios

### Example Code
See below Issue -  Encountered 404 "File not found" error while loading an image from the API.
```            
<Link to={`/articles/${article.id}`}>
    <img src={article.imageUrl} onError={(e) => e.target.src=".././images-error.png"} alt="image" />
    <h2 className="list-image-text">{article.title}</h2>
</Link>
```



### Issues and Resolutions
![CORS-1](./public/CORS-1.png) Neal received this error when trying to load the API data. Leo recommended a CORS extension which seemed to resolve the error, but Neal was unable to see the array data in the console.

![CORS-2](./public/CORS-2.png) He found a setting in zscaler that was causing the issue

![zscaler](./public/zscaler.png)

We had some issues with copying CSS styles from another project, we ended up deleting and retyping most of the CSS file.

Struggled with centering text with absolute position. Below is the solution.
https://stackoverflow.com/questions/18147642/css-centering-absolute-positioned-text-inside-relative-parent

React documentation used to explain how to highlight the nav menu item that is active
https://reacttraining.com/react-router/web/api/NavLink

Encountered 404 "File not found" error while loading an image from the API.

BEFORE IMAGE

![404 File Not Found](./public/no-image.png)
AFTER IMAGE

![404 File Not Found - Fixed](./public/no-image-fix.png)


### User Stories
![User Stories](./planning/userstories.md)
