    //Welcome
    var welcome_block = {
        data: {
            screen_id:'welcome'
        },
        type: 'html-button-response',
        stimulus: 'Welcome to the *DANSYNC experiment!',
        choices: ['Click here to continue'],
    };
    //Instructions
    var instruction_block = {
        data: {
            screen_id:'instructions'
        },
        type: 'instructions',
        pages: ["<p>In this experiment you will watch <b>10 seconds long videos</b></p>"+
        "<p>your task is to tell if the <b>dancer is in sychrony</b> with the video</p>"+
        "<p>pay attention, you will only be able to watch <b>each video once</b></p>",
                '<p>Before you do the experiment you will have the chance to <b>practice</b> with <b>3 videos</b></p>'+
                '<p>so, no preasure</p>',
                'We also want to know some information about you'],
        show_clickable_nav: true
    };
    //Survey
    var survey_page1 = {
    data: {
            screen_id:'age_nationality'
        },
    type: 'survey-text',
    questions: [
      {prompt: 'How old are you?', columns: 3, required: true, name: 'Age'},
      {prompt: 'Where were you born?', placeholder: 'Country', columns: 50, name: 'BirthLocation'}
    ],
    randomize_question_order: false
    };

  var survey_page2 = {
        data: {
            screen_id:'gender_dancer_musician_tiktok'
        },
      type: 'survey-likert',
      questions: [
        {prompt: "what gender do you identify with?", name: 'Gender', labels: ['male','female','non-binary'], required: true}, 
        {prompt: "How much experience do you have with dancing?", name: 'Dancer', labels: ['barely any','some','lots'], required: true},
        {prompt: "How much experience do you have with learning an instrument?", name:'Musician', labels: ['little to no experience','intermediate','advanced'], required: true},
        {prompt: "Are you familiar with TikTok dancing?", name:'TikTok', labels:['yes','no']}
      ],
      randomize_question_oder: false
  };

    //Practice Trials

  var trial = {
    type: 'video-button-response',
    data:jsPsych.timelineVariable("data"),
    sources: jsPsych.timelineVariable("sources"),
    choices: ['yes','no'],
    button_html: '<button class="jspsych-btn">%choice%!</button>',
    margin_vertical: '10px',
    margin_horizontal: '8px',
    prompt: 'Is this video synchrnised?',
    width: 600,
    //height: 600,
    autoplay: true,
    //controls: true,
    //start: 8,
    //stop: 9,
    rate: 1,
    //trial_duration: 2000,
    
    response_ends_trial: true
  }
  var practice_stimuli = [
      {sources:['data/videos/07.mp4'],data:{scree_id:'07',correct_ans:'0'}},
      {sources:['data/videos/13.mp4'],data:{scree_id:'13',correct_ans:'0'}},
      {sources:['data/videos/26_half_lead.mp4'],data:{scree_id:'26_half_lead',correct_ans:'1'}}
  ]
  var video = ['data/videos/07.mp4','data/videos/13.mp4','data/videos/26_half_lead.mp4']
  var practice_procedure = {
      timeline:[trial],
      timeline_variables:practice_stimuli,
      preload_video: video
};
    //Experiment instructions
    //Experimental trials
    //Debrief

    //timeline
    timeline = [];
    timeline.push(welcome_block);
    timeline.push(instruction_block);
    timeline.push(survey_page1);
    timeline.push(survey_page2);
    timeline.push(practice_procedure);
function startExperiment(){
    jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        on_finish: function () {
            jsPsych.data.displayData()
        }

    })
};
