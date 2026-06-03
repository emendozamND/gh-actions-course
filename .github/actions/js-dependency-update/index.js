const core = require ('@actions/core');
async function run(){
    /*
    1. Parse Inputs
        1.1 Parse inputs: base-branch from which to check for updates 
        1.2 target-branch to create the PR
        1.3 Github >Token for Authentication purposes (to create PRs)
        1.4 Working directory for which to check for dependencies 
    2. Execute thr npm update command whithin the cworking directory
    3. check whether there are modified package*.json files
    4.- If there are modified files_
        4.1 Add  and commit files to the target-branch
        4.2 Create a PR to the base -branch using theoctokit API
        
    5.-  Otherwise, conclude the custom action
    */ 
    core.info('I am a cusatom JS action');
}
run()