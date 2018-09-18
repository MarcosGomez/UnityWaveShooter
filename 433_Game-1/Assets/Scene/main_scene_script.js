#pragma strict

private var paused:boolean;

private var pauseMenu:GameObject;

private var mainPlayer:GameObject;
private var mainCamera:GameObject;

// Called after game is started.
function Start()
{
    paused = false;

    mainPlayer = GameObject.FindWithTag("Player");
    mainCamera = GameObject.FindWithTag("MainCamera");

    pauseMenu = GameObject.Find("PauseMenu");

    pauseMenu.SetActive(paused);
}

// Called on every update for this scene
function Update()
{
    // only going to detect the escape key for an update, otherwise do nothing
    if (!Input.GetKeyDown("escape"))
    {
        return;
    }

    var playerScript = mainPlayer.GetComponent(char_script);
    var cameraScript = mainCamera.GetComponent(cam_script);

    paused = !paused;
    pauseMenu.SetActive(paused);

    if (paused)
    {
        // Pause game

        playerScript.enabled = false;
        cameraScript.enabled = false;

        Time.timeScale = 0;
    }
    else
    {
        // Unpause game
        playerScript.enabled = true;
        cameraScript.enabled = true;
        
        Time.timeScale = 1;
    }
}

// Private functions...


private function log(something)
{
    Debug.Log(something);
}