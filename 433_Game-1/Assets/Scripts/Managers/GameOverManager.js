//var playerHealth : PlayerHealth;      // Reference to the player's health.

private var anim : Animator;            // Reference to the animator component.



function Awake ()
{
    // Set up the reference.
    anim = GetComponent (Animator);
}


function Update ()
{
    // If the player has run out of health...
//    if(playerHealth.currentHealth <= 0)
//    {

//
//        
//    }
	//Temporary until health
	if(ScoreManager.score >= 1000){
		 // ... tell the animator the game is over.
        anim.SetTrigger ("Win");
	}
}