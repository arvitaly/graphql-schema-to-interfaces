// tslint:disable:max-line-length member-ordering
export interface IMutation {
    acceptTopicSuggestion(params: IMutationacceptTopicSuggestionParams): IAcceptTopicSuggestionPayload;
    addComment(params: IMutationaddCommentParams): IAddCommentPayload;
    addProjectCard(params: IMutationaddProjectCardParams): IAddProjectCardPayload;
    addProjectColumn(params: IMutationaddProjectColumnParams): IAddProjectColumnPayload;
    addPullRequestReview(params: IMutationaddPullRequestReviewParams): IAddPullRequestReviewPayload;
    addPullRequestReviewComment(params: IMutationaddPullRequestReviewCommentParams): IAddPullRequestReviewCommentPayload;
    addReaction(params: IMutationaddReactionParams): IAddReactionPayload;
    createProject(params: IMutationcreateProjectParams): ICreateProjectPayload;
    declineTopicSuggestion(params: IMutationdeclineTopicSuggestionParams): IDeclineTopicSuggestionPayload;
    deleteProject(params: IMutationdeleteProjectParams): IDeleteProjectPayload;
    deleteProjectCard(params: IMutationdeleteProjectCardParams): IDeleteProjectCardPayload;
    deleteProjectColumn(params: IMutationdeleteProjectColumnParams): IDeleteProjectColumnPayload;
    deletePullRequestReview(params: IMutationdeletePullRequestReviewParams): IDeletePullRequestReviewPayload;
    dismissPullRequestReview(params: IMutationdismissPullRequestReviewParams): IDismissPullRequestReviewPayload;
    moveProjectCard(params: IMutationmoveProjectCardParams): IMoveProjectCardPayload;
    moveProjectColumn(params: IMutationmoveProjectColumnParams): IMoveProjectColumnPayload;
    removeOutsideCollaborator(params: IMutationremoveOutsideCollaboratorParams): IRemoveOutsideCollaboratorPayload;
    removeReaction(params: IMutationremoveReactionParams): IRemoveReactionPayload;
    requestReviews(params: IMutationrequestReviewsParams): IRequestReviewsPayload;
    submitPullRequestReview(params: IMutationsubmitPullRequestReviewParams): ISubmitPullRequestReviewPayload;
    updateProject(params: IMutationupdateProjectParams): IUpdateProjectPayload;
    updateProjectCard(params: IMutationupdateProjectCardParams): IUpdateProjectCardPayload;
    updateProjectColumn(params: IMutationupdateProjectColumnParams): IUpdateProjectColumnPayload;
    updatePullRequestReview(params: IMutationupdatePullRequestReviewParams): IUpdatePullRequestReviewPayload;
    updatePullRequestReviewComment(params: IMutationupdatePullRequestReviewCommentParams): IUpdatePullRequestReviewCommentPayload;
    updateSubscription(params: IMutationupdateSubscriptionParams): IUpdateSubscriptionPayload;
    updateTopics(params: IMutationupdateTopicsParams): IUpdateTopicsPayload;
}
export interface IMutationupdateTopicsParams {
    input: IUpdateTopicsInput;
}
export interface IUpdateTopicsInput {
    clientMutationId?: string;
    repositoryId: string;
    topicNames: string[];
}
export interface IUpdateTopicsPayload {
    clientMutationId: string;
    invalidTopicNames: string[];
    repository: IRepository;
}
export interface IMutationupdateSubscriptionParams {
    input: IUpdateSubscriptionInput;
}
export interface IUpdateSubscriptionInput {
    clientMutationId?: string;
    subscribableId: string;
    state: any;
}
export interface IUpdateSubscriptionPayload {
    clientMutationId: string;
    subscribable: any;
}
export interface IMutationupdatePullRequestReviewCommentParams {
    input: IUpdatePullRequestReviewCommentInput;
}
export interface IUpdatePullRequestReviewCommentInput {
    clientMutationId?: string;
    pullRequestReviewCommentId: string;
    body: string;
}
export interface IUpdatePullRequestReviewCommentPayload {
    clientMutationId: string;
    pullRequestReviewComment: IPullRequestReviewComment;
}
export interface IMutationupdatePullRequestReviewParams {
    input: IUpdatePullRequestReviewInput;
}
export interface IUpdatePullRequestReviewInput {
    clientMutationId?: string;
    pullRequestReviewId: string;
    body: string;
}
export interface IUpdatePullRequestReviewPayload {
    clientMutationId: string;
    pullRequestReview: IPullRequestReview;
}
export interface IMutationupdateProjectColumnParams {
    input: IUpdateProjectColumnInput;
}
export interface IUpdateProjectColumnInput {
    clientMutationId?: string;
    projectColumnId: string;
    name: string;
}
export interface IUpdateProjectColumnPayload {
    clientMutationId: string;
    projectColumn: IProjectColumn;
}
export interface IMutationupdateProjectCardParams {
    input: IUpdateProjectCardInput;
}
export interface IUpdateProjectCardInput {
    clientMutationId?: string;
    projectCardId: string;
    note: string;
}
export interface IUpdateProjectCardPayload {
    clientMutationId: string;
    projectCard: IProjectCard;
}
export interface IMutationupdateProjectParams {
    input: IUpdateProjectInput;
}
export interface IUpdateProjectInput {
    clientMutationId?: string;
    projectId: string;
    name: string;
    body?: string;
    state?: any;
}
export interface IUpdateProjectPayload {
    clientMutationId: string;
    project: IProject;
}
export interface IMutationsubmitPullRequestReviewParams {
    input: ISubmitPullRequestReviewInput;
}
export interface ISubmitPullRequestReviewInput {
    clientMutationId?: string;
    pullRequestReviewId: string;
    event: any;
    body?: string;
}
export interface ISubmitPullRequestReviewPayload {
    clientMutationId: string;
    pullRequestReview: IPullRequestReview;
}
export interface IMutationrequestReviewsParams {
    input: IRequestReviewsInput;
}
export interface IRequestReviewsInput {
    clientMutationId?: string;
    pullRequestId: string;
    userIds: string[];
    union?: boolean;
}
export interface IRequestReviewsPayload {
    clientMutationId: string;
    pullRequest: IPullRequest;
    requestedReviewersEdge: IUserEdge;
}
export interface IMutationremoveReactionParams {
    input: IRemoveReactionInput;
}
export interface IRemoveReactionInput {
    clientMutationId?: string;
    subjectId: string;
    content: any;
}
export interface IRemoveReactionPayload {
    clientMutationId: string;
    reaction: IReaction;
    subject: any;
}
export interface IMutationremoveOutsideCollaboratorParams {
    input: IRemoveOutsideCollaboratorInput;
}
export interface IRemoveOutsideCollaboratorInput {
    clientMutationId?: string;
    userId: string;
    organizationId: string;
}
export interface IRemoveOutsideCollaboratorPayload {
    clientMutationId: string;
    removedUser: IUser;
}
export interface IMutationmoveProjectColumnParams {
    input: IMoveProjectColumnInput;
}
export interface IMoveProjectColumnInput {
    clientMutationId?: string;
    columnId: string;
    afterColumnId?: string;
}
export interface IMoveProjectColumnPayload {
    clientMutationId: string;
    columnEdge: IProjectColumnEdge;
}
export interface IMutationmoveProjectCardParams {
    input: IMoveProjectCardInput;
}
export interface IMoveProjectCardInput {
    clientMutationId?: string;
    cardId: string;
    columnId: string;
    afterCardId?: string;
}
export interface IMoveProjectCardPayload {
    cardEdge: IProjectCardEdge;
    clientMutationId: string;
}
export interface IMutationdismissPullRequestReviewParams {
    input: IDismissPullRequestReviewInput;
}
export interface IDismissPullRequestReviewInput {
    clientMutationId?: string;
    pullRequestReviewId: string;
    message: string;
}
export interface IDismissPullRequestReviewPayload {
    clientMutationId: string;
    pullRequestReview: IPullRequestReview;
}
export interface IMutationdeletePullRequestReviewParams {
    input: IDeletePullRequestReviewInput;
}
export interface IDeletePullRequestReviewInput {
    clientMutationId?: string;
    pullRequestReviewId: string;
}
export interface IDeletePullRequestReviewPayload {
    clientMutationId: string;
    pullRequestReview: IPullRequestReview;
}
export interface IMutationdeleteProjectColumnParams {
    input: IDeleteProjectColumnInput;
}
export interface IDeleteProjectColumnInput {
    clientMutationId?: string;
    columnId: string;
}
export interface IDeleteProjectColumnPayload {
    clientMutationId: string;
    deletedColumnId: string;
    project: IProject;
}
export interface IMutationdeleteProjectCardParams {
    input: IDeleteProjectCardInput;
}
export interface IDeleteProjectCardInput {
    clientMutationId?: string;
    cardId: string;
}
export interface IDeleteProjectCardPayload {
    clientMutationId: string;
    column: IProjectColumn;
    deletedCardId: string;
}
export interface IMutationdeleteProjectParams {
    input: IDeleteProjectInput;
}
export interface IDeleteProjectInput {
    clientMutationId?: string;
    projectId: string;
}
export interface IDeleteProjectPayload {
    clientMutationId: string;
    owner: any;
}
export interface IMutationdeclineTopicSuggestionParams {
    input: IDeclineTopicSuggestionInput;
}
export interface IDeclineTopicSuggestionInput {
    clientMutationId?: string;
    repositoryId: string;
    name: string;
    reason: any;
}
export interface IDeclineTopicSuggestionPayload {
    clientMutationId: string;
    topic: ITopic;
}
export interface IMutationcreateProjectParams {
    input: ICreateProjectInput;
}
export interface ICreateProjectInput {
    clientMutationId?: string;
    ownerId: string;
    name: string;
    body?: string;
}
export interface ICreateProjectPayload {
    clientMutationId: string;
    project: IProject;
}
export interface IMutationaddReactionParams {
    input: IAddReactionInput;
}
export interface IAddReactionInput {
    clientMutationId?: string;
    subjectId: string;
    content: any;
}
export interface IAddReactionPayload {
    clientMutationId: string;
    reaction: IReaction;
    subject: any;
}
export interface IMutationaddPullRequestReviewCommentParams {
    input: IAddPullRequestReviewCommentInput;
}
export interface IAddPullRequestReviewCommentInput {
    clientMutationId?: string;
    pullRequestReviewId: string;
    commitOID?: any;
    body: string;
    path?: string;
    position?: number;
    inReplyTo?: string;
}
export interface IAddPullRequestReviewCommentPayload {
    clientMutationId: string;
    comment: IPullRequestReviewComment;
    commentEdge: IPullRequestReviewCommentEdge;
}
export interface IMutationaddPullRequestReviewParams {
    input: IAddPullRequestReviewInput;
}
export interface IAddPullRequestReviewInput {
    clientMutationId?: string;
    pullRequestId: string;
    body?: string;
    event?: any;
    comments?: IDraftPullRequestReviewComment[];
}
export interface IDraftPullRequestReviewComment {
    path: string;
    position: number;
    body: string;
}
export interface IAddPullRequestReviewPayload {
    clientMutationId: string;
    pullRequestReview: IPullRequestReview;
    reviewEdge: IPullRequestReviewEdge;
}
export interface IMutationaddProjectColumnParams {
    input: IAddProjectColumnInput;
}
export interface IAddProjectColumnInput {
    clientMutationId?: string;
    projectId: string;
    name: string;
}
export interface IAddProjectColumnPayload {
    clientMutationId: string;
    columnEdge: IProjectColumnEdge;
    project: IProject;
}
export interface IMutationaddProjectCardParams {
    input: IAddProjectCardInput;
}
export interface IAddProjectCardInput {
    clientMutationId?: string;
    projectColumnId: string;
    contentId?: string;
    note?: string;
}
export interface IAddProjectCardPayload {
    cardEdge: IProjectCardEdge;
    clientMutationId: string;
    projectColumn: IProject;
}
export interface IMutationaddCommentParams {
    input: IAddCommentInput;
}
export interface IAddCommentInput {
    clientMutationId?: string;
    subjectId: string;
    body: string;
}
export interface IAddCommentPayload {
    clientMutationId: string;
    commentEdge: IIssueCommentEdge;
    subject: any;
    timelineEdge: IIssueTimelineItemEdge;
}
export interface IMutationacceptTopicSuggestionParams {
    input: IAcceptTopicSuggestionInput;
}
export interface IAcceptTopicSuggestionInput {
    clientMutationId?: string;
    repositoryId: string;
    name: string;
}
export interface IAcceptTopicSuggestionPayload {
    clientMutationId: string;
    topic: ITopic;
}
export interface IQuery {
    node(params: IQuerynodeParams): any;
    nodes(params: IQuerynodesParams): any[];
    organization(params: IQueryorganizationParams): IOrganization;
    relay: IQuery;
    repository(params: IQueryrepositoryParams): IRepository;
    repositoryOwner(params: IQueryrepositoryOwnerParams): any;
    resource(params?: IQueryresourceParams): any;
    search(params: IQuerysearchParams): ISearchResultItemConnection;
    topic(params: IQuerytopicParams): ITopic;
    user(params: IQueryuserParams): IUser;
    viewer: IUser;
}
export interface IQueryuserParams {
    login: string;
}
export interface IQuerytopicParams {
    name: string;
}
export interface IQuerysearchParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    query: string;
    type: any;
}
export interface ISearchResultItemConnection {
    codeCount: number;
    edges: ISearchResultItemEdge[];
    issueCount: number;
    nodes: any[];
    pageInfo: IPageInfo;
    repositoryCount: number;
    userCount: number;
    wikiCount: number;
}
export interface ISearchResultItemEdge {
    cursor: string;
    node: any;
}
export interface IQueryresourceParams {
    url?: any;
}
export interface IQueryrepositoryOwnerParams {
    login: string;
}
export interface IQueryrepositoryParams {
    owner: string;
    name: string;
}
export interface IQueryorganizationParams {
    login: string;
}
export interface IOrganization {
    avatarURL(params?: IOrganizationavatarURLParams): string;
    gist(params: IOrganizationgistParams): IGist;
    gists(params?: IOrganizationgistsParams): IGistConnection;
    id: string;
    login: string;
    members(params?: IOrganizationmembersParams): IUserConnection;
    name: string;
    path: any;
    project(params: IOrganizationprojectParams): IProject;
    projects(params?: IOrganizationprojectsParams): IProjectConnection;
    projectsPath: any;
    projectsUrl: any;
    repositories(params?: IOrganizationrepositoriesParams): IRepositoryConnection;
    repository(params: IOrganizationrepositoryParams): IRepository;
    team(params?: IOrganizationteamParams): ITeam;
    teams(params?: IOrganizationteamsParams): ITeamConnection;
    teamsPath: any;
    teamsUrl: any;
    url: any;
    viewerCanAdminister: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanCreateRepositories: boolean;
}
export interface IOrganizationteamsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    privacy?: any;
    role?: any;
    query?: string;
    orderBy?: ITeamOrder;
}
export interface ITeamOrder {
    field: any;
    direction: any;
}
export interface ITeamConnection {
    edges: ITeamEdge[];
    nodes: ITeam[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface ITeamEdge {
    cursor: string;
    node: ITeam;
}
export interface IOrganizationteamParams {
    slug?: string;
}
export interface ITeam {
    description: string;
    editTeamPath: any;
    editTeamUrl: any;
    id: string;
    invitations(params?: ITeaminvitationsParams): IOrganizationInvitationConnection;
    name: string;
    path: any;
    privacy: any;
    slug: string;
    teamPath: any;
    teamRepositoriesPath: any;
    teamRepositoriesUrl: any;
    teamUrl: any;
    url: any;
}
export interface ITeaminvitationsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IOrganizationInvitationConnection {
    edges: IOrganizationInvitationEdge[];
    nodes: IOrganizationInvitation[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IOrganizationInvitationEdge {
    cursor: string;
    node: IOrganizationInvitation;
}
export interface IOrganizationInvitation {
    email: string;
    id: string;
    inviter: IUser;
    login: string;
    role: any;
}
export interface IOrganizationrepositoryParams {
    name: string;
}
export interface IOrganizationrepositoriesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    privacy?: any;
    orderBy?: IRepositoryOrder;
    affiliation?: any[];
    isLocked?: boolean;
    isFork?: boolean;
}
export interface IOrganizationprojectsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    orderBy?: IProjectOrder;
    search?: string;
    states?: any[];
}
export interface IOrganizationprojectParams {
    number: number;
}
export interface IOrganizationmembersParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IUserConnection {
    edges: IUserEdge[];
    nodes: IUser[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IUserEdge {
    cursor: string;
    node: IUser;
}
export interface IUser {
    avatarURL(params?: IUseravatarURLParams): string;
    bio: string;
    bioHTML: any;
    company: string;
    companyHTML: any;
    contributedRepositories(params?: IUsercontributedRepositoriesParams): IRepositoryConnection;
    createdAt: any;
    databaseId: number;
    email: string;
    followers(params?: IUserfollowersParams): IFollowerConnection;
    following(params?: IUserfollowingParams): IFollowingConnection;
    gist(params: IUsergistParams): IGist;
    gists(params?: IUsergistsParams): IGistConnection;
    id: string;
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isEmployee: boolean;
    isHireable: boolean;
    isSiteAdmin: boolean;
    isViewer: boolean;
    location: string;
    login: string;
    name: string;
    organization(params: IUserorganizationParams): IOrganization;
    organizations(params?: IUserorganizationsParams): IOrganizationConnection;
    path: any;
    pinnedRepositories(params?: IUserpinnedRepositoriesParams): IRepositoryConnection;
    pullRequests(params?: IUserpullRequestsParams): IPullRequestConnection;
    repositories(params?: IUserrepositoriesParams): IRepositoryConnection;
    repository(params: IUserrepositoryParams): IRepository;
    starredRepositories(params?: IUserstarredRepositoriesParams): IStarredRepositoryConnection;
    updatedAt: any;
    url: any;
    viewerCanFollow: boolean;
    viewerIsFollowing: boolean;
    watching(params?: IUserwatchingParams): IRepositoryConnection;
    websiteURL: string;
}
export interface IUserwatchingParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    privacy?: any;
    orderBy?: IRepositoryOrder;
    affiliation?: any[];
    isLocked?: boolean;
}
export interface IUserstarredRepositoriesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    ownedByViewer?: boolean;
    orderBy?: IStarOrder;
}
export interface IStarredRepositoryConnection {
    edges: IStarredRepositoryEdge[];
    nodes: IRepository[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IStarredRepositoryEdge {
    cursor: string;
    node: IRepository;
    starredAt: any;
}
export interface IUserrepositoryParams {
    name: string;
}
export interface IUserrepositoriesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    privacy?: any;
    orderBy?: IRepositoryOrder;
    affiliation?: any[];
    isLocked?: boolean;
    isFork?: boolean;
}
export interface IUserpullRequestsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    states?: any[];
    labels?: string[];
    headRefName?: string;
    baseRefName?: string;
}
export interface IUserpinnedRepositoriesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    privacy?: any;
    orderBy?: IRepositoryOrder;
    affiliation?: any[];
    isLocked?: boolean;
}
export interface IUserorganizationsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IOrganizationConnection {
    edges: IOrganizationEdge[];
    nodes: IOrganization[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IOrganizationEdge {
    cursor: string;
    node: IOrganization;
}
export interface IUserorganizationParams {
    login: string;
}
export interface IUsergistsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    visibility?: any;
}
export interface IUsergistParams {
    name: string;
}
export interface IUserfollowingParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IFollowingConnection {
    edges: IUserEdge[];
    nodes: IUser[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IUserfollowersParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IFollowerConnection {
    edges: IUserEdge[];
    nodes: IUser[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IUsercontributedRepositoriesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    privacy?: any;
    orderBy?: IRepositoryOrder;
    affiliation?: any[];
    isLocked?: boolean;
}
export interface IRepositoryConnection {
    edges: IRepositoryEdge[];
    nodes: IRepository[];
    pageInfo: IPageInfo;
    totalCount: number;
    totalDiskUsage: number;
}
export interface IRepositoryEdge {
    cursor: string;
    node: IRepository;
}
export interface IRepository {
    commitComments(params?: IRepositorycommitCommentsParams): ICommitCommentConnection;
    createdAt: any;
    databaseId: number;
    defaultBranchRef: IRef;
    description: string;
    descriptionHTML: any;
    diskUsage: number;
    forks(params?: IRepositoryforksParams): IRepositoryConnection;
    hasIssuesEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageURL: string;
    id: string;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    issue(params: IRepositoryissueParams): IIssue;
    issueish(params: IRepositoryissueishParams): any;
    issues(params?: IRepositoryissuesParams): IIssueConnection;
    label(params: IRepositorylabelParams): ILabel;
    labels(params?: IRepositorylabelsParams): ILabelConnection;
    languages(params?: IRepositorylanguagesParams): ILanguageConnection;
    license: string;
    lockReason: any;
    mentionableUsers(params?: IRepositorymentionableUsersParams): IUserConnection;
    milestone(params: IRepositorymilestoneParams): IMilestone;
    milestones(params?: IRepositorymilestonesParams): IMilestoneConnection;
    mirrorURL: string;
    name: string;
    object(params?: IRepositoryobjectParams): any;
    owner: any;
    parent: IRepository;
    path: any;
    primaryLanguage: ILanguage;
    project(params: IRepositoryprojectParams): IProject;
    projects(params?: IRepositoryprojectsParams): IProjectConnection;
    projectsPath: any;
    projectsUrl: any;
    protectedBranches(params?: IRepositoryprotectedBranchesParams): IProtectedBranchConnection;
    pullRequest(params: IRepositorypullRequestParams): IPullRequest;
    pullRequests(params?: IRepositorypullRequestsParams): IPullRequestConnection;
    pushedAt: any;
    ref(params: IRepositoryrefParams): IRef;
    refs(params: IRepositoryrefsParams): IRefConnection;
    releases(params?: IRepositoryreleasesParams): IReleaseConnection;
    repositoryTopics(params?: IRepositoryrepositoryTopicsParams): IRepositoryTopicConnection;
    stargazers(params?: IRepositorystargazersParams): IStargazerConnection;
    updatedAt: any;
    url: any;
    viewerCanCreateProjects: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdateTopics: boolean;
    viewerHasStarred: boolean;
    viewerSubscription: any;
    watchers(params?: IRepositorywatchersParams): IUserConnection;
}
export interface IRepositorywatchersParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IRepositorystargazersParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    orderBy?: IStarOrder;
}
export interface IStarOrder {
    field: any;
    direction: any;
}
export interface IStargazerConnection {
    edges: IStargazerEdge[];
    nodes: IUser[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IStargazerEdge {
    cursor: string;
    node: IUser;
    starredAt: any;
}
export interface IRepositoryrepositoryTopicsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IRepositoryTopicConnection {
    edges: IRepositoryTopicEdge[];
    nodes: IRepositoryTopic[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IRepositoryTopicEdge {
    cursor: string;
    node: IRepositoryTopic;
}
export interface IRepositoryTopic {
    id: string;
    path: any;
    topic: ITopic;
    url: any;
}
export interface ITopic {
    id: string;
    name: string;
    relatedTopics: ITopic[];
}
export interface IRepositoryreleasesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IReleaseConnection {
    edges: IReleaseEdge[];
    nodes: IRelease[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IReleaseEdge {
    cursor: string;
    node: IRelease;
}
export interface IRelease {
    description: string;
    id: string;
    name: string;
    path: any;
    publishedAt: any;
    releaseAsset(params?: IReleasereleaseAssetParams): IReleaseAssetConnection;
    releaseAssets(params?: IReleasereleaseAssetsParams): IReleaseAssetConnection;
    tag: IRef;
    url: any;
}
export interface IReleasereleaseAssetsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IReleasereleaseAssetParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    name?: string;
}
export interface IReleaseAssetConnection {
    edges: IReleaseAssetEdge[];
    nodes: IReleaseAsset[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IReleaseAssetEdge {
    cursor: string;
    node: IReleaseAsset;
}
export interface IReleaseAsset {
    id: string;
    name: string;
    release: IRelease;
    url: any;
}
export interface IRepositoryrefsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    refPrefix: string;
    direction?: any;
}
export interface IRefConnection {
    edges: IRefEdge[];
    nodes: IRef[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IRefEdge {
    cursor: string;
    node: IRef;
}
export interface IRepositoryrefParams {
    qualifiedName: string;
}
export interface IRepositorypullRequestsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    states?: any[];
    labels?: string[];
    headRefName?: string;
    baseRefName?: string;
}
export interface IRepositorypullRequestParams {
    number: number;
}
export interface IRepositoryprotectedBranchesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IProtectedBranchConnection {
    edges: IProtectedBranchEdge[];
    nodes: IProtectedBranch[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IProtectedBranchEdge {
    cursor: string;
    node: IProtectedBranch;
}
export interface IProtectedBranch {
    authorizedActorsOnly: boolean;
    authorizedDismissalActorsOnly: boolean;
    blockDeletionsEnforcementLevel: number;
    blockForcePushesEnforcementLevel: number;
    creator: IUser;
    id: string;
    name: string;
    pullRequestReviewsEnforcementLevel: number;
    repository: IRepository;
    requiredStatusChecksEnforcementLevel: number;
    reviewDismissalAllowances(params?: IProtectedBranchreviewDismissalAllowancesParams): IReviewDismissalAllowanceConnection;
    strictRequiredStatusChecksPolicy: boolean;
}
export interface IProtectedBranchreviewDismissalAllowancesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IReviewDismissalAllowanceConnection {
    edges: IReviewDismissalAllowanceEdge[];
    nodes: IReviewDismissalAllowance[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IReviewDismissalAllowanceEdge {
    cursor: string;
    node: IReviewDismissalAllowance;
}
export interface IReviewDismissalAllowance {
    actor: any;
    id: string;
    protectedBranch: IProtectedBranch;
}
export interface IRepositoryprojectsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    orderBy?: IProjectOrder;
    search?: string;
    states?: any[];
}
export interface IProjectOrder {
    field: any;
    direction: any;
}
export interface IProjectConnection {
    edges: IProjectEdge[];
    nodes: IProject[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IProjectEdge {
    cursor: string;
    node: IProject;
}
export interface IRepositoryprojectParams {
    number: number;
}
export interface IProject {
    body: string;
    bodyHTML: any;
    closedAt: any;
    columns(params?: IProjectcolumnsParams): IProjectColumnConnection;
    createdAt: any;
    creator: IUser;
    databaseId: number;
    id: string;
    name: string;
    number: number;
    owner: any;
    path: any;
    state: any;
    updatedAt: any;
    url: any;
    viewerCanEdit: boolean;
    viewerCanUpdate: boolean;
}
export interface IProjectcolumnsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IProjectColumnConnection {
    edges: IProjectColumnEdge[];
    nodes: IProjectColumn[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IProjectColumnEdge {
    cursor: string;
    node: IProjectColumn;
}
export interface IProjectColumn {
    cards(params?: IProjectColumncardsParams): IProjectCardConnection;
    createdAt: any;
    databaseId: number;
    id: string;
    name: string;
    project: IProject;
    updatedAt: any;
}
export interface IProjectColumncardsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IProjectCardConnection {
    edges: IProjectCardEdge[];
    nodes: IProjectCard[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IProjectCardEdge {
    cursor: string;
    node: IProjectCard;
}
export interface IProjectCard {
    content: any;
    createdAt: any;
    creator: IUser;
    databaseId: number;
    id: string;
    note: string;
    projectColumn: IProjectColumn;
    state: any;
    updatedAt: any;
}
export interface IRepositoryobjectParams {
    oid?: any;
    expression?: string;
}
export interface IRepositorymilestonesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IMilestoneConnection {
    edges: IMilestoneEdge[];
    nodes: IMilestone[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IMilestoneEdge {
    cursor: string;
    node: IMilestone;
}
export interface IRepositorymilestoneParams {
    number: number;
}
export interface IRepositorymentionableUsersParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IRepositorylanguagesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    orderBy?: ILanguageOrder;
}
export interface ILanguageOrder {
    field: any;
    direction: any;
}
export interface ILanguageConnection {
    edges: ILanguageEdge[];
    nodes: ILanguage[];
    pageInfo: IPageInfo;
    totalCount: number;
    totalSize: number;
}
export interface ILanguageEdge {
    cursor: string;
    node: ILanguage;
    size: number;
}
export interface ILanguage {
    color: string;
    id: string;
    name: string;
}
export interface IRepositorylabelsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IRepositorylabelParams {
    name: string;
}
export interface IRepositoryissuesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    states?: any[];
    labels?: string[];
}
export interface IRepositoryissueishParams {
    number: number;
}
export interface IRepositoryissueParams {
    number: number;
}
export interface IRepositoryforksParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    privacy?: any;
    orderBy?: IRepositoryOrder;
    affiliation?: any[];
    isLocked?: boolean;
}
export interface IRepositoryOrder {
    field: any;
    direction: any;
}
export interface IRef {
    associatedPullRequests(params?: IRefassociatedPullRequestsParams): IPullRequestConnection;
    id: string;
    name: string;
    prefix: string;
    repository: IRepository;
    target: any;
}
export interface IRefassociatedPullRequestsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    states?: any[];
}
export interface IPullRequestConnection {
    edges: IPullRequestEdge[];
    nodes: IPullRequest[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IPullRequestEdge {
    cursor: string;
    node: IPullRequest;
}
export interface IPullRequest {
    assignees(params?: IPullRequestassigneesParams): IUserConnection;
    author: any;
    baseRef: IRef;
    baseRefName: string;
    body: string;
    bodyHTML: any;
    bodyText: string;
    comments(params?: IPullRequestcommentsParams): IIssueCommentConnection;
    commits(params?: IPullRequestcommitsParams): ICommitConnection;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number;
    editor: any;
    headRef: IRef;
    headRefName: string;
    headRepository: IRepository;
    headRepositoryOwner: any;
    id: string;
    labels(params?: IPullRequestlabelsParams): ILabelConnection;
    lastEditedAt: any;
    liveReactionUpdatesEnabled: boolean;
    mergeCommit: ICommit;
    mergeable: any;
    merged: boolean;
    mergedAt: any;
    number: number;
    path: any;
    potentialMergeCommit: ICommit;
    publishedAt: any;
    reactionGroups: IReactionGroup[];
    reactions(params?: IPullRequestreactionsParams): IReactionConnection;
    reactionsWebsocket: string;
    repository: IRepository;
    reviewRequests(params?: IPullRequestreviewRequestsParams): IReviewRequestConnection;
    reviews(params?: IPullRequestreviewsParams): IPullRequestReviewConnection;
    state: any;
    timeline(params?: IPullRequesttimelineParams): IIssueTimelineConnection;
    title: string;
    updatedAt: any;
    url: any;
    viewerCanDelete: boolean;
    viewerCanEdit: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotEditReasons: any[];
    viewerCannotUpdateReasons: any[];
    viewerDidAuthor: boolean;
    websocket(params: IPullRequestwebsocketParams): string;
}
export interface IPullRequestwebsocketParams {
    channel: any;
}
export interface IPullRequesttimelineParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    since?: string;
}
export interface IPullRequestreviewsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    states?: any[];
}
export interface IPullRequestReviewConnection {
    edges: IPullRequestReviewEdge[];
    nodes: IPullRequestReview[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IPullRequestReviewEdge {
    cursor: string;
    node: IPullRequestReview;
}
export interface IPullRequestReview {
    author: any;
    body: string;
    bodyHTML: any;
    bodyText: string;
    comments(params?: IPullRequestReviewcommentsParams): IPullRequestReviewCommentConnection;
    commit: ICommit;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number;
    editor: any;
    id: string;
    lastEditedAt: any;
    path: any;
    publishedAt: any;
    pullRequest: IPullRequest;
    repository: IRepository;
    state: any;
    submittedAt: any;
    updatedAt: any;
    url: any;
    viewerCanDelete: boolean;
    viewerCanEdit: boolean;
    viewerCanUpdate: boolean;
    viewerCannotEditReasons: any[];
    viewerCannotUpdateReasons: any[];
    viewerDidAuthor: boolean;
}
export interface IPullRequestReviewcommentsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IPullRequestReviewCommentConnection {
    edges: IPullRequestReviewCommentEdge[];
    nodes: IPullRequestReviewComment[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IPullRequestReviewCommentEdge {
    cursor: string;
    node: IPullRequestReviewComment;
}
export interface IPullRequestReviewComment {
    author: any;
    body: string;
    bodyHTML: any;
    bodyText: string;
    commit: ICommit;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number;
    diffHunk: string;
    draftedAt: any;
    editor: any;
    id: string;
    lastEditedAt: any;
    liveReactionUpdatesEnabled: boolean;
    originalCommit: ICommit;
    originalPosition: number;
    path: string;
    position: number;
    publishedAt: any;
    pullRequest: IPullRequest;
    pullRequestReview: IPullRequestReview;
    reactionGroups: IReactionGroup[];
    reactions(params?: IPullRequestReviewCommentreactionsParams): IReactionConnection;
    reactionsWebsocket: string;
    repository: IRepository;
    updatedAt: any;
    url: any;
    viewerCanDelete: boolean;
    viewerCanEdit: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotEditReasons: any[];
    viewerCannotUpdateReasons: any[];
    viewerDidAuthor: boolean;
    websocket(params: IPullRequestReviewCommentwebsocketParams): string;
}
export interface IPullRequestReviewCommentwebsocketParams {
    channel: any;
}
export interface IPullRequestReviewCommentreactionsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    content?: any;
    orderBy?: IReactionOrder;
}
export interface IPullRequestreviewRequestsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IReviewRequestConnection {
    edges: IReviewRequestEdge[];
    nodes: IReviewRequest[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IReviewRequestEdge {
    cursor: string;
    node: IReviewRequest;
}
export interface IReviewRequest {
    databaseId: number;
    id: string;
    pullRequest: IPullRequest;
    reviewer: IUser;
}
export interface IPullRequestreactionsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    content?: any;
    orderBy?: IReactionOrder;
}
export interface IPullRequestlabelsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IPullRequestcommitsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface ICommitConnection {
    edges: ICommitEdge[];
    nodes: ICommit[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IPullRequestcommentsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IIssueCommentConnection {
    edges: IIssueCommentEdge[];
    nodes: IIssueComment[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IIssueCommentEdge {
    cursor: string;
    node: IIssueComment;
}
export interface IIssueComment {
    author: any;
    body: string;
    bodyHTML: any;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number;
    editor: any;
    id: string;
    issue: IIssue;
    lastEditedAt: any;
    liveReactionUpdatesEnabled: boolean;
    publishedAt: any;
    reactionGroups: IReactionGroup[];
    reactions(params?: IIssueCommentreactionsParams): IReactionConnection;
    reactionsWebsocket: string;
    repository: IRepository;
    updatedAt: any;
    viewerCanDelete: boolean;
    viewerCanEdit: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotEditReasons: any[];
    viewerCannotUpdateReasons: any[];
    viewerDidAuthor: boolean;
    websocket(params: IIssueCommentwebsocketParams): string;
}
export interface IIssueCommentwebsocketParams {
    channel: any;
}
export interface IIssueCommentreactionsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    content?: any;
    orderBy?: IReactionOrder;
}
export interface IIssue {
    assignees(params?: IIssueassigneesParams): IUserConnection;
    author: any;
    body: string;
    bodyHTML: any;
    bodyText: string;
    comments(params?: IIssuecommentsParams): IIssueCommentConnection;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number;
    editor: any;
    id: string;
    labels(params?: IIssuelabelsParams): ILabelConnection;
    lastEditedAt: any;
    liveReactionUpdatesEnabled: boolean;
    milestone: IMilestone;
    number: number;
    participants(params?: IIssueparticipantsParams): IUserConnection;
    path: any;
    publishedAt: any;
    reactionGroups: IReactionGroup[];
    reactions(params?: IIssuereactionsParams): IReactionConnection;
    reactionsWebsocket: string;
    repository: IRepository;
    state: any;
    timeline(params?: IIssuetimelineParams): IIssueTimelineConnection;
    title: string;
    updatedAt: any;
    url: any;
    viewerCanDelete: boolean;
    viewerCanEdit: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotEditReasons: any[];
    viewerCannotUpdateReasons: any[];
    viewerDidAuthor: boolean;
    websocket(params: IIssuewebsocketParams): string;
}
export interface IIssuewebsocketParams {
    channel: any;
}
export interface IIssuetimelineParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    since?: string;
}
export interface IIssueTimelineConnection {
    edges: IIssueTimelineItemEdge[];
    nodes: any[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IIssueTimelineItemEdge {
    cursor: string;
    node: any;
}
export interface IIssuereactionsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    content?: any;
    orderBy?: IReactionOrder;
}
export interface IIssueparticipantsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IMilestone {
    closedIssueCount: number;
    createdBy: IUser;
    description: string;
    dueOn: any;
    id: string;
    number: number;
    openIssueCount: number;
    path: any;
    repository: IRepository;
    state: any;
    title: string;
    url: any;
}
export interface IIssuelabelsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface ILabelConnection {
    edges: ILabelEdge[];
    nodes: ILabel[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface ILabelEdge {
    cursor: string;
    node: ILabel;
}
export interface ILabel {
    color: string;
    id: string;
    issues(params?: ILabelissuesParams): IIssueConnection;
    name: string;
    pullRequests(params?: ILabelpullRequestsParams): IPullRequestConnection;
    repository: IRepository;
}
export interface ILabelpullRequestsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface ILabelissuesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IIssueConnection {
    edges: IIssueEdge[];
    nodes: IIssue[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IIssueEdge {
    cursor: string;
    node: IIssue;
}
export interface IIssuecommentsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IIssueassigneesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IPullRequestassigneesParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IRepositorycommitCommentsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface ICommitCommentConnection {
    edges: ICommitCommentEdge[];
    nodes: ICommitComment[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface ICommitCommentEdge {
    cursor: string;
    node: ICommitComment;
}
export interface ICommitComment {
    author: any;
    body: string;
    bodyHTML: any;
    commit: ICommit;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number;
    editor: any;
    id: string;
    lastEditedAt: any;
    liveReactionUpdatesEnabled: boolean;
    path: string;
    position: number;
    publishedAt: any;
    reactionGroups: IReactionGroup[];
    reactions(params?: ICommitCommentreactionsParams): IReactionConnection;
    reactionsWebsocket: string;
    repository: IRepository;
    updatedAt: any;
    user: IUser;
    viewerCanDelete: boolean;
    viewerCanEdit: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotEditReasons: any[];
    viewerCannotUpdateReasons: any[];
    viewerDidAuthor: boolean;
}
export interface ICommitCommentreactionsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    content?: any;
    orderBy?: IReactionOrder;
}
export interface IReactionOrder {
    field: any;
    direction: any;
}
export interface IReactionConnection {
    edges: IReactionEdge[];
    nodes: IReaction[];
    pageInfo: IPageInfo;
    totalCount: number;
    viewerHasReacted: boolean;
}
export interface IReactionEdge {
    cursor: string;
    node: IReaction;
}
export interface IReaction {
    content: any;
    createdAt: any;
    databaseId: number;
    id: string;
    user: IUser;
}
export interface IReactionGroup {
    content: any;
    createdAt: any;
    subject: any;
    users(params?: IReactionGroupusersParams): IReactingUserConnection;
    viewerHasReacted: boolean;
}
export interface IReactionGroupusersParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface IReactingUserConnection {
    edges: IReactingUserEdge[];
    nodes: IUser[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IReactingUserEdge {
    cursor: string;
    node: IUser;
    reactedAt: any;
}
export interface ICommit {
    author: IGitActor;
    blame(params: ICommitblameParams): IBlame;
    comments(params?: ICommitcommentsParams): ICommitCommentConnection;
    committedViaWeb: boolean;
    committer: IGitActor;
    history(params?: ICommithistoryParams): ICommitHistoryConnection;
    id: string;
    message: string;
    messageBody: string;
    messageBodyHTML: any;
    messageHeadline: string;
    messageHeadlineHTML: any;
    oid: any;
    path: any;
    repository: IRepository;
    signature: any;
    status: IStatus;
    tree: ITree;
    url: any;
    websocket: string;
}
export interface ITree {
    entries: ITreeEntry[];
    id: string;
    oid: any;
    repository: IRepository;
}
export interface ITreeEntry {
    mode: number;
    name: string;
    object: any;
    oid: any;
    repository: IRepository;
    type: string;
}
export interface IStatus {
    commit: ICommit;
    context(params: IStatuscontextParams): IStatusContext;
    contexts: IStatusContext[];
    id: string;
    state: any;
}
export interface IStatuscontextParams {
    name: string;
}
export interface IStatusContext {
    commit: ICommit;
    context: string;
    createdAt: any;
    creator: any;
    description: string;
    id: string;
    state: any;
    targetURL: string;
}
export interface ICommithistoryParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    path?: string;
    author?: ICommitAuthor;
    since?: any;
    until?: any;
}
export interface ICommitAuthor {
    id?: string;
    emails?: string[];
}
export interface ICommitHistoryConnection {
    edges: ICommitEdge[];
    nodes: ICommit[];
    pageInfo: IPageInfo;
}
export interface ICommitEdge {
    cursor: string;
    node: ICommit;
}
export interface ICommitcommentsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
}
export interface ICommitblameParams {
    path: string;
}
export interface IBlame {
    ranges: IBlameRange[];
}
export interface IBlameRange {
    age: number;
    commit: ICommit;
    endingLine: number;
    startingLine: number;
}
export interface IGitActor {
    avatarURL(params?: IGitActoravatarURLParams): string;
    date: any;
    email: string;
    name: string;
    user: IUser;
}
export interface IGitActoravatarURLParams {
    size?: number;
}
export interface IUseravatarURLParams {
    size?: number;
}
export interface IOrganizationgistsParams {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    visibility?: any;
}
export interface IGistConnection {
    edges: IGistEdge[];
    nodes: IGist[];
    pageInfo: IPageInfo;
    totalCount: number;
}
export interface IPageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
}
export interface IGistEdge {
    cursor: string;
    node: IGist;
}
export interface IOrganizationgistParams {
    name: string;
}
export interface IGist {
    createdAt: any;
    description: string;
    id: string;
    name: string;
    owner: any;
    public: boolean;
    updatedAt: any;
}
export interface IOrganizationavatarURLParams {
    size?: number;
}
export interface IQuerynodesParams {
    ids: string[];
}
export interface IQuerynodeParams {
    id: string;
}
