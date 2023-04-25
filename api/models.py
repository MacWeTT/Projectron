from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    verified = models.BooleanField(default=False)
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    
    def __str__(self):
        return self.user.username
    
    

Tags = (
    ('1', 'C'),('2', 'C++'),('3', 'C#'),('4', 'Java'),('5', 'Python'),('6', 'JavaScript'),('7', 'HTML'),('8', 'CSS'),('9', 'PHP'),('10', 'SQL'),('11', 'Ruby'),('12', 'Swift'),('13', 'Go'),('14', 'R'),('15', 'Kotlin'),('16', 'Rust'),('17', 'Scala'),('18', 'Dart'),('19', 'Objective-C'),('20', 'TypeScript'),('21', 'Perl'),('22', 'Lua'),('23', 'Haskell'),('24', 'Elixir'),('25', 'Clojure'),('26', 'Erlang'),('27', 'F#'),('28', 'Julia'),('29', 'Visual Basic'),('30', 'COBOL'),('31', 'Assembly'),('32', 'Matlab'),('35', 'Ada'),('36','Other Languages')
)


class Project(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
    title = models.CharField(max_length=100)
    description = models.TextField()
    tags = models.CharField(max_length=100, choices=Tags, default='36')
    
    def __str__(self):
        return self.title