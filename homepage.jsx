var React = require('react');

// raw data
var info = {
			name: 'Yihan Qian',
			email: 'endingqian@hotmail.com',
			gitHub: 'https://github.com/ninaQIAN',
			education: {
				master: {
					year: '2013-2015',
					degree: 'Master of Science',
					major: 'Electrical and Computer Engineering',
					school: 'Rutgers University',
					region: 'U.S.A',
					gpa: '3.79'
				},
				bachelor: {
					year: '2009-2013',
					degree: 'Bachelor of Engineering',
					major: 'Automation Science and Electrical Engineering',
					school: 'Beihang University',
					region: 'China',
					gpa: '3.3'
				}
			}
		};

var Title = React.createClass({
	render: function() {
		return (
			<div className="col-md-12 text-right">
          		<p className="text-uppercase">{this.props.name}</p>
	            <p>{this.props.email}</p>
	            <p>{this.props.gitHub}</p>
            </div>
		);
	}
});


var School = React.createClass({
	render: function() {
		return (
			<div className="row">
        		<div className="col-md-2"></div>
			    <div className="col-md-6">{this.props.year} {this.props.degree}, {this.props.major}, {this.props.school}, {this.props.region}</div>
			    <div className="col-md-4">{this.props.gpa}</div>
	    	</div>
		);
	}
});

var Education = React.createClass({
	var edu = this.props.education;
  	var content = [];
  	Object.keys(edu).map(function(key, idx) {
    	var e = edu[key];
      	content.push(<School year={e.year} degree={e.degree} major={e.major} school={e.school} region={e.region} gpa={e.gpa}/>);
	});
  	render: function() {
  		return (<div className="col-md-12">{content}</div>);
  	}
});

var homepage = React.createClass({

	render: function() {
		return (
			<div className="container" > 
			    <Title name={info.name} email={info.email} gitHub={info.gitHub}/>
			    <Education education={info.education}/>
  			</div>
		);
	}
});


